const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 1000,
        minHeight: 800,
        maxWidth: 1000,
        maxHeight: 800,
    })

    win.loadFile('index.html')
}

Menu.setApplicationMenu(null)

app.whenReady().then(() =>{
    createWindow()
})
