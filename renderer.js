document.getElementById('btnBuscar').addEventListener('click', async () => {
    const uf = document.getElementById('uf').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    // A rua agora pode estar vazia
    let logradouro = document.getElementById('logradouro').value.trim(); 
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '<p>Buscando...</p>';

    // Validação: Só UF e Cidade são obrigatórios agora
    if (!uf || !cidade) {
        resultadoDiv.innerHTML = '<p class="erro">Por favor, preencha pelo menos o Estado (UF) e a Cidade.</p>';
        return;
    }

    // --- A MÁGICA ACONTECE AQUI ---
    // Se o usuário não digitou rua, usamos "Centro" para tentar achar o CEP Geral
    let termoBusca = logradouro;
    let buscaGenerica = false;

    if (logradouro === "") {
        termoBusca = "Centro";
        buscaGenerica = true; // Marcamos que foi uma busca automática
    } else if (logradouro.length < 3) {
        // ViaCEP exige 3 letras se for digitado algo
        resultadoDiv.innerHTML = '<p class="erro">Se preencher a rua, digite pelo menos 3 letras.</p>';
        return;
    }
    // ------------------------------

    try {
        const url = `https://viacep.com.br/ws/${uf}/${cidade}/${termoBusca}/json/`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erro na conexão com ViaCEP');
        }

        const data = await response.json();
        resultadoDiv.innerHTML = ''; 

        // Se a lista vier vazia
        if (Array.isArray(data) && data.length === 0) {
            if (buscaGenerica) {
                resultadoDiv.innerHTML = '<p class="erro">Não encontramos um CEP Geral para esta cidade. Tente digitar o nome de uma rua.</p>';
            } else {
                resultadoDiv.innerHTML = '<p class="erro">Nenhuma rua encontrada com esse nome.</p>';
            }
            return;
        }

        // Se der erro explícito da API
        if (data.erro) {
            resultadoDiv.innerHTML = '<p class="erro">Cidade não encontrada ou CEP inexistente.</p>';
            return;
        }

        // Renderiza os resultados
        const lista = Array.isArray(data) ? data : [data];

        // Se for busca genérica (sem rua digitada), avisa o usuário
        if (buscaGenerica) {
            resultadoDiv.innerHTML += `<p style="color:blue; font-size: 0.9em;">* Buscando pelo CEP principal/Centro da cidade.</p>`;
        }

        lista.forEach(item => {
            resultadoDiv.innerHTML += `
                <div class="item">
                    <strong>CEP:</strong> ${item.cep}<br>
                    <strong>Logradouro:</strong> ${item.logradouro}<br>
                    <strong>Bairro:</strong> ${item.bairro}<br>
                    <strong>Cidade:</strong> ${item.localidade}/${item.uf}
                </div>
            `;
        });

    } catch (error) {
        console.error(error);
        resultadoDiv.innerHTML = '<p class="erro">Erro ao buscar. Verifique a internet ou o nome da cidade.</p>';
    }
});