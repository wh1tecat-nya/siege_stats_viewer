"use strict";

const Login = {};

class User {
	constructor(user) {
		this.email = user.email;
		this.password = user.password;
		this.saveflag = user.saveflag;
	}
};

Login.vm = {};

Login.vm.user;

Login.vm.init = (data) => {
	if (data == null) {
		console.log("make a new user");
		Login.vm.user = new User({
			email: null,
			password: null,
			saveflag: false
		});
	} else {
		console.log("load a user");
		Login.vm.user = new User({
			email: data.email,
			password: data.password,
			saveflag: data.saveflag
		});
	}
};


Login.vm.save = (email,password,saveflag) => {
	console.log(email, saveflag);
	Login.vm.user.email = email;
	Login.vm.user.password = password;
	Login.vm.user.saveflag = saveflag;
	if (saveflag == true) {
		localStorage.setItem("user", JSON.stringify(Login.vm.user));
	}else{
		localStorage.removeItem("user");
	}
};

Login.vm.login = (email, password, saveflag) => {
	Login.vm.save(email,password,saveflag);
	ipcRenderer.send("api",{
		method:"login",
		headers:{
			"Authorization":"Basic " + window.btoa(email+":"+password),
			"Ubi-AppId":"39baebad-39e5-4552-8c25-2c9b919064e2",
			"Content-Type":"application/json; charset=utf-8"
		},
		url:"https://connect.ubi.com/ubiservices/v2/profiles/sessions"
	});
};

ipcRenderer.on("returnlogin",(event,arg) => {
	console.log(arg.body);
	if(arg.statusCode!=200){
		console.log("error");
		m.render($("div#alert")[0],Login.vm.loginerror);
	}else{
		const session = new Session({
			profileId : arg.body.profileId,
			ticket : arg.body.ticket,
			name : arg.body.username
		});
		sessionStorage.setItem("userprofile",JSON.stringify(session));
		m.render($("div#alert")[0],"");
		m.route.set("/Stats");
	}	
});

Login.vm.loginerror =
	m("div.container",[
		m("div.row",[
			m("div.alert.alert-dismissible.alert-danger",[
				m("button.close",{onclick:() => {m.render($("div#alert")[0],"")},"area-label":"close"},[
					m("span","×")
				]),
			m("h3","Login Error!")	
			])
		])
	]);

Login.oninit = () => {
	if (localStorage.getItem("user") == null) {
		console.log("not find userdata;");
		Login.vm.init(null);
	} else {
		const user = JSON.parse(localStorage.getItem("user"));
		console.log("find userdata;");
		Login.vm.init(user);
	}
};

Login.view = (ctrl) => {
	const vm = Login.vm;
	return [
		m("div.container", [
			m("div.row", [
				m("h2", "Login Uplay Account")
			]),
			m("div.row", [
				m("form.form-horizontal", [
					m("fieldset", [
						m("div.form-group", [
							m("label.col-lg-2.control-label", {
								for: "inputEmail"
							}, "Email"),
							m("div.col-lg-10", [
								m("input.form-control#inputEmail", {
									type: "text",
									placeholder: "Email",
									value: Login.vm.user.email
								})
							])
						]),
						m("div.form-group", [
							m("label.col-lg-2.control-label", {
								for: "inputPassword"
							}, "PassWord"),
							m("div.col-lg-10", [
								m("input.form-control#inputPassword", {
									type: "password",
									placeholder: "PassWord",
									value: Login.vm.user.password
								}),
								m("div.checkbox", [
									m("label", [
										m("input#saveFlag", {
											type: "checkbox",
											oncreate: () => {$("#saveFlag").prop("checked",Login.vm.user.saveflag)}
										})
									], "Remenber Account")
								])
							])
						]),
						m("div.form-group", [
							m("div.col-lg-10.col-lg-offset-2", [
								m("button.btn", {
									type: "reset"
								}, "Clear"),
								m("button.btn.btn-primary", {
									type: "button",
									onclick: function () {
										Login.vm.login($("#inputEmail").val(), $("#inputPassword").val(), document.getElementById("saveFlag").checked);
									}
								}, "Submit")
							])
						])
					])
				])
			])

		])
	]
};