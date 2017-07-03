"use strict";

const electron = require("electron");
const app = electron.app;
const Window = electron.BrowserWindow;
let mainWindow = null;

app.on("window-all-closed",function(){
	if(process.platform != "darwin")
		app.quit();
});

app.on('ready', function() {

	// ブラウザ(Chromium)の起動, 初期画面のロード
	mainWindow = new Window({
		width: 1366, 
		height: 768,
		webPreferences : {
			webSecurity:false
		}
	});
	mainWindow.loadURL('file://' + __dirname + '/view/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});