# 📍 CepFacil - Busca Inteligente de CEPs

> Um aplicativo Desktop moderno para localização de CEPs brasileiros, capaz de realizar buscas exatas e aproximadas utilizando múltiplas APIs.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Electron](https://img.shields.io/badge/Electron-v33.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📸 Preview
![Screenshot do App](./screenshot.png)
*(Lembra-te de colocar um print do app a rodar na pasta do projeto com o nome screenshot.png)*

## 🚀 Sobre o Projeto

O **CepFacil** nasceu da necessidade de encontrar CEPs mesmo quando não se tem todas as informações do endereço. Diferente dos buscadores comuns que exigem o nome exato da rua, este projeto implementa uma **Lógica Híbrida** inteligente.

### O Problema Resolvido
Muitas cidades (como Indaial-SC ou cidades menores) ou bairros novos não aparecem facilmente em buscas rígidas. Além disso, APIs gratuitas têm limitações diferentes.

### A Solução (O "Pulo do Gato")
O app decide automaticamente qual estratégia usar:
1.  **Tem Rua?** Usa a API **ViaCEP** (precisão oficial dos Correios).
2.  **Só tem Bairro?** Usa a API **OpenStreetMap (Nominatim)** para listar todas as ruas daquele bairro.
3.  **Só tem a Cidade?** Ativa o **Modo Coringa**, buscando ruas principais e a região central da cidade para garantir que o utilizador nunca receba uma tela em branco.

## ✨ Funcionalidades

* ✅ **Busca Híbrida:** Alternância automática entre ViaCEP e OpenStreetMap.
* ✅ **Resiliência a Falhas:** Se uma API não retornar dados, o sistema tenta uma busca mais ampla.
* ✅ **Layout Responsivo:** Design estilo "Dashboard" que se adapta a telas grandes e vira uma lista em telas menores.
* ✅ **Resultados em Grid:** Visualização clara com cartões.
* ✅ **Copiar Fácil:** Botão para copiar o CEP com um clique.
* ✅ **Feedback Visual:** Indicadores de carregamento, mensagens de erro amigáveis e avisos quando a busca é aproximada.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3 (Design Responsivo), JavaScript (ES6+).
* **Runtime:** [Electron](https://www.electronjs.org/) (para transformar em App Desktop).
* **APIs Externas:**
    * [ViaCEP](https://viacep.com.br/)
    * [OpenStreetMap (Nominatim)](https://nominatim.org/)
* **Ícones:** FontAwesome 6.

## 📦 Como rodar este projeto

### Pré-requisitos
Precisas de ter o [Node.js](https://nodejs.org/) instalado na tua máquina.

### Passo a Passo

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/akaharo/CepFacil.git](https://github.com/akaharo/CepFacil.git)
    cd CepFacil
    ```

2.  **Instalar as dependências:**
    ```bash
    npm install
    ```

3.  **Iniciar o App em modo de desenvolvimento:**
    ```bash
    npm start
    ```

4.  **Para gerar o executável (.exe):**
    ```bash
    # Cria a pasta 'dist' com o executável pronto para Windows
    npx electron-packager . CepFacil --platform=win32 --arch=x64 --out=dist --overwrite
    ```

## 🤝 Contribuição

Contribuições são bem-vindas! Se tiveres uma ideia para melhorar a lógica de busca ou o design:

1.  Faz um Fork do projeto.
2.  Cria uma Branch para a tua Feature (`git checkout -b feature/NovaFeature`).
3.  Faz o Commit (`git commit -m 'Adicionando NovaFeature'`).
4.  Faz o Push (`git push origin feature/NovaFeature`).
5.  Abre um Pull Request.

## 📝 Licença

Este projeto está sob a licença MIT.

---
Feito com 💙 por **Haro**
