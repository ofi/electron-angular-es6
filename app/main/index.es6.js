let app = require('app');
let ipc = require('ipc');
let BrowserWindow = require('browser-window');

var mainWindow = null;

ipc.on('devTools', (event,arg) =>{
    mainWindow.openDevTools();
});

app.on('window-all-closed', () => {
    // force app termination on OSX when mainWindow has been closed
    if (process.platform == 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    mainWindow.webContents.on('did-finish-load',() =>{
        mainWindow.setTitle(app.getName());
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
