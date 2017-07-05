"use strict";

const electron = require("electron");
const {ipcMain} = require("electron");
const request = require("request");
const btoa = require("btoa");

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

ipcMain.on("api", (event,arg) => {
	console.log(event);
	let retdata = {};
	switch(arg.method){
		case "login":
			request(arg.url,{
				json:true,
				method:"POST",
				headers:arg.headers
			},(error,response,body) => {
				retdata = response;
				event.sender.send("returnlogin",retdata);
			});
			break;	

		case "profile":
			request(arg.url,{
				json:true,
				method:"GET",
				headers:arg.headers
			},(error,response,body) => {
				retdata.body = body;
				retdata.error = error;
				retdata.res = response;
				event.sender.send("returnprofile",retdata);
			});
			break;
		
		case "statistics":
			request(arg.url,{
				json:true,
				method:"GET",
				headers:arg.headers
			},(error,response,body) => {
				retdata.body = body;
				retdata.res = response;
				retdata.error = error;
				event.sender.send("returnstatistics",retdata);
			});
			break;
		
		case "playerid":
			request(arg.url,{
				json:true,
				method:"GET",
				headers:arg.headers
			},(error,response,body) => {
				retdata.body = body;
				retdata.res = response;
				retdata.error = error;
				event.sender.send("returnplayerid",retdata);
			});
			break;
	};
	
});

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});