"use strict";

const Stats = {};

Stats.menu = {};

Stats.content = {};

Stats.content.player = {};
Stats.content.gamemode = {};
Stats.content.operator = {};

class stats{
	constructor(data){
		this.data = data;
	}
};

Stats.statistics_option = "generalpvp_timeplayed,generalpvp_matchplayed,generalpvp_matchwon,generalpvp_matchlost,generalpvp_kills,generalpvp_death,generalpvp_bullethit,generalpvp_bulletfired,generalpvp_killassists,generalpvp_revive,generalpvp_headshot,generalpvp_penetrationkills,generalpvp_meleekills,casualpvp_matchwon,casualpvp_matchlost,casualpvp_timeplayed,casualpvp_matchplayed,casualpvp_kills,casualpvp_death,rankedpvp_matchwon,rankedpvp_matchlost,rankedpvp_timeplayed,rankedpvp_matchplayed,rankedpvp_kills,rankedpvp_death,rescuehostagepvp_bestscore,rescuehostagepvp_matchwon,rescuehostagepvp_matchlost,rescuehostagepvp_matchplayed,plantbombpvp_bestscore,plantbombpvp_matchwon,plantbombpvp_matchlost,plantbombpvp_matchplayed,secureareapvp_bestscore,secureareapvp_matchwon,secureareapvp_matchlost,secureareapvp_matchplayed,operatorpvp_kills,operatorpvp_death,operatorpvp_roundwon,operatorpvp_roundlost,operatorpvp_timeplayed,operatorpvp_mute_gadgetjammed,operatorpvp_sledge_hammerhole,operatorpvp_thatcher_gadgetdestroywithemp,operatorpvp_castle_kevlarbarricadedeployed,operatorpvp_ash_bonfirewallbreached,operatorpvp_pulse_heartbeatspot,operatorpvp_thermite_reinforcementbreached,operatorpvp_doc_teammaterevive,operatorpvp_rook_armortakenteammate,operatorpvp_twitch_gadgetdestroybyshockdrone,operatorpvp_montagne_shieldblockdamage,operatorpvp_smoke_poisongaskill,operatorpvp_glaz_sniperkill,operatorpvp_fuze_clusterchargekill,operatorpvp_kapkan_boobytrapkill,operatorpvp_tachanka_turretkill,operatorpvp_blitz_flashedenemy,operatorpvp_iq_gadgetspotbyef,operatorpvp_jager_gadgetdestroybycatcher,operatorpvp_bandit_batterykill,operatorpvp_buck_kill,operatorpvp_frost_dbno,operatorpvp_blackbeard_gunshieldblockdamage,operatorpvp_valkyrie_camdeployed,operatorpvp_capitao_lethaldartkills,operatorpvp_caveira_interrogations,operatorpvp_hibana_detonate_projectile  ,operatorpvp_echo_enemy_sonicburst_affected,operatorpvp_cazador_assist_kill,operatorpvp_black_mirror_gadget_deployed,weapontypepvp_kills,weapontypepvp_headshot,weapontypepvp_bulletfired,weapontypepvp_bullethit";

Stats.retdata = {};

Stats.vm = {};

Stats.vm.userprofile;

Stats.vm.init = () => {
	Stats.vm.getplayerid(Stats.vm.userprofile.name);
};

Stats.vm.Search = (name) => {
	Stats.retdata = {};
	Stats.vm.getplayerid(name);
};

Stats.vm.getprofiles = (playerid) => {
	ipcRenderer.send("api",{
		method:"profile",
		headers:{
			"Authorization":"Ubi_v1 t=" + Stats.vm.userprofile.ticket,
			"Ubi-AppId":"39baebad-39e5-4552-8c25-2c9b919064e2",
			"Content-Type":"application/json; charset=utf-8"
		},
		url:"https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/r6playerprofile/playerprofile/progressions?profile_ids=" + playerid
	});
};

Stats.vm.getstatistics = (playerid) => {
	ipcRenderer.send("api",{
		method:"statistics",
		headers:{
			"Authorization":"Ubi_v1 t=" + Stats.vm.userprofile.ticket,
			"Ubi-AppId":"39baebad-39e5-4552-8c25-2c9b919064e2",
			"Content-Type":"application/json; charset=utf-8"
		},
		url:"https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/playerstats2/statistics?populations=" + playerid + "&statistics=" + Stats.statistics_option
	});
};

Stats.vm.getplayerid = (name) => {
	ipcRenderer.send("api",{
		method:"playerid",
		headers:{
			"Authorization":"Ubi_v1 t=" + Stats.vm.userprofile.ticket,
			"Ubi-AppId":"39baebad-39e5-4552-8c25-2c9b919064e2",
			"Content-Type":"application/json; charset=utf-8"
		},
		url:"https://public-ubiservices.ubi.com/v2/profiles?platformType=uplay&nameOnPlatform=" + name
	});
};

ipcRenderer.on("returnprofile",(event,arg) => {
	if(arg.res.statusCode == 200){
		Stats.retdata.profile = arg.body;
		m.redraw();
	}else if(arg.res.statusCode == 504){
		
	}else{
		console.log("profile error");
		Stats.retdata = {};
		sessionStorage.removeItem("userprofile");
		m.route.set("/login");
		m.render($("div#alert")[0],Login.vm.loginerror);
		m.redraw();
	}	

});

ipcRenderer.on("returnstatistics",(event,arg) => {
	console.log(arg);
	if(arg.res.statusCode == 200){
		Stats.retdata.statistics = arg.body;
		console.log(arg.body);
		console.log(arg.res);
		Stats.retdata.stats = arg.body.results[Stats.retdata.playerid.profiles[0].profileId];
		m.redraw();
	}else if(arg.res.statusCode == 504){

	}else{
		console.log("stastics error");
		Stats.retdata = {};
		sessionStorage.removeItem("userprofile");
		m.route.set("/login");
		m.render($("div#alert")[0],Login.vm.loginerror);
		m.redraw();
	}
});

ipcRenderer.on("returnplayerid",(event,arg) => {
	if(arg.res.statusCode == 200){
		if(Object.keys(Stats.retdata).length == 0){
			console.log("search");
			Stats.retdata.playerid = arg.body;
			console.log(Stats.retdata.playerid.profiles[0].profileId);
			Stats.vm.getprofiles(Stats.retdata.playerid.profiles[0].profileId);
			Stats.vm.getstatistics(Stats.retdata.playerid.profiles[0].profileId);
			m.redraw();
		}else{
			Stats.retdata.playerid = arg.body;
			m.redraw();
		}
	}else if(arg.res.statusCode == 504){
		
	}else{
		console.log("error");
		Stats.retdata = {};
		sessionStorage.removeItem("userprofile");
		m.route.set("/login");
		m.render($("div#alert")[0],Stats.vm.loginerror);
		m.redraw();
	}
});

Stats.vm.loginerror =
	m("div.container",[
		m("div.row",[
			m("div.alert.alert-dismissible.alert-danger",[
				m("button.close",{onclick:() => {m.render($("div#alert")[0],"")},"area-label":"close"},[
					m("span","×")
				]),
			m("h3","Session Timeout!")	
			])
		])
	]);

Stats.oninit = () => {
	console.log("Stats.oninit")
	Stats.vm.userprofile = JSON.parse(sessionStorage.getItem("userprofile"));
	Stats.vm.init();
};

Stats.menu.view = (ctrl) => {
	return [
		m("ul.nav.nav-pills",[
			m("li.menus.player.active",[
				m("a",{"oncreate":m.route.link,"href":"/Stats/player","onclick": () => {activechange("player")}},"Player")
			]),
			m("li.menus.gamemode",[
				m("a",{"oncreate":m.route.link,"href":"/Stats/gamemode","onclick": () => {activechange("gamemode")}},"GameMode")
			]),
			m("li.menus.operator",[
				m("a",{"oncreate":m.route.link,"href":"/Stats/operator","onclick":() => {activechange("operator")}},"Operator")
			])
		])
	];
};

Stats.content.player =
	m("div.col-md-6",[
		m("div.panel.panel-primary",[
			m("div.panel-heading","Player")
		])
	]);

Stats.content.gamemode =
	m("div.col-md-6",[
		m("div.panel.panel-primary",[
			m("div.panel-heading","GameMode")
		])
	]);

Stats.content.operator = 
	m("div.col-md-6",[
		m("div.panel.panel-primary",[
			m("div.panel-heading","Operator")
		])
	]);

Stats.view = (ctrl) => {
	const vm = Stats.vm;

	if(Stats.retdata.profile == null || Stats.retdata.statistics == null){
		return	[
			m("div.spinner",[
				m("div.rect1"),
				m("div.rect2"),
				m("div.rect3"),
				m("div.rect4"),
				m("div.rect5")
			])
		]
	}else{
		return [
			m.mount(document.getElementById("menu"),Stats.menu),
			m.render(document.getElementById("contents"),Stats.content[ctrl.attrs.param]),
			m("div.col-md-6",[
				m("div.panel.panel-primary",[
					m("div.panel-heading","Player Stats"),
					m("div.panel-body",[
						m("div.row",[
							m("div.col-md-5",[
								m("img.img-responsive.center-block.img-circle#playericon",{oncreate: (vnode) => {vnode.dom.src = "https://ubisoft-avatars.akamaized.net/"+ "21067093-822e-497d-ae8a-5d171573f6c8" +"/default_146_146.png"}})
							]),
							m("div.col-md-7",[
								m("h1#playername",{oncreate: (vnode) => {vnode.dom.textContent = "dammyname"}}),
								m("h3#playerlevel",{oncreate: (vnode) => {vnode.dom.textContent = "Level : 160" }})
							])
						])
					]),
					m("ul.list-group.text-right",[
						m("li.list-group-item",[
							m("strong.pull-left","Play Time"),
							parseInt(Stats.retdata.stats["generalpvp_timeplayed:infinite"]/3600) +" hour "+ parseInt(Stats.retdata.stats["generalpvp_timeplayed:infinite"]%3600/60) + " min"
						]),
						m("li.list-group-item",[
							m("strong.pull-left","Match Played"),
							Stats.retdata.stats["generalpvp_matchplayed:infinite"]
						])
					])
				])
			])
		];
	}
};
