const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// require('electron-reload')(path.join(__dirname, '../../dist'), {
//   electron: require('electron')
// });

let win;

function createWindow() {
    require('vue-devtools').install()
    win = new BrowserWindow({show: false});
    win.maximize()

    win.loadURL(url.format({
        pathname: path.join(__dirname, '../../dist/index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.isResizable(false);
    // win.center();
    // win.setTitle("title");
    // win.setMenu(null);
    // win.maximize();

    // win.webContents().openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-on-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// require('electron-reload')(__dirname, '../../dist');
