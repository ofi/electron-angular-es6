'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
    // force app termination on OSX when mainWindow has been closed
    if (process.platform == 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // open dev tools after window has been created
    // mainWindow.openDevTools();

    mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    mainWindow.webContents.on('did-finish-load', function () {
        mainWindow.setTitle(app.getName());
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});