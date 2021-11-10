const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: './assets/components/logo.png'
    })

    win.loadFile('index.html')
}

Menu.setApplicationMenu(null)

app.whenReady().then(() =>{
    createWindow()
})