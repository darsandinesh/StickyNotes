const { BrowserWindow, app, ipcMain } = require('electron');

let win;

ipcMain.on('make-new-window', () => {
    const newWin = new BrowserWindow({
        width: 200,
        height: 240,
        maxWidth: 300,
        maxHeight: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false
    })
    newWin.loadFile('index.html');
    newWin.show();
})
function createWin() {
    win = new BrowserWindow({
        width: 200,
        height: 240,
        maxWidth: 300,
        maxHeight: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWin();
    
});



