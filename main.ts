const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        maxWidth: 800,
        maxHeight: 600,
    })

    win.loadFile('index.html')
}

Menu.setApplicationMenu(null)

app.whenReady().then(() =>{
    createWindow()
})
