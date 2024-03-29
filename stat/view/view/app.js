'use strict';

const root = document.getElementById("root");

class Session{
	constructor(data){
		this.profileId = data.profileId;
		this.ticket = data.ticket;
		this.name = data.name;
	}
}

m.route.prefix("#");

m.route(root,"/Login",{
	"/Login" : Login,
	"/Stats/:param" : Stats
});

if(sessionStorage.getItem("userprofile") == null){
	m.route.set("/Login");
}
