const { app, BrowserWindow, ipcMain, Menu, MenuItem } = require('electron') // { Module, Module }
const path = require('node:path')

const createWindow = () => {
const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarOverlay: true,
    autoHideMenuBar: true,
    webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    }
})

    win.loadFile('index.html')
}

/*const menu = new Menu()
menu.append(new MenuItem({
    label: 'Electron',
    submenu: [{
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => { console.log("Electron rocks?!") }
    }]
}))

Menu.setApplicationMenu(menu)*/

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

ipcMain.handle('create-new-window', () => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})