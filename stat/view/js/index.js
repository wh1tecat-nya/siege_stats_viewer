"use strict";

const activechange = (arg) => {
	$("li.menus").removeClass("active");
	$("."+arg).addClass("active");
};