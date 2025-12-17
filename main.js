const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 550,
    title: "CepFacil",
    autoHideMenuBar: true, // <--- ISSO TIRA O MENU (File, Edit...)
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Carrega seu arquivo HTML
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})