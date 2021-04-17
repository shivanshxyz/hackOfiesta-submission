var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

var Sahaaya = function(){
	if(localStorage.getItem("serviceStatus") == "start"){
		Sahaaya.startService();
	} else {
		Sahaaya.stopService();
	}
}
Sahaaya.startService = function(){
	$(".disabled").style.display = "none";
	$(".enabled").style.display = "block";
	$("body").classList.add("on");
}
Sahaaya.stopService = function(){
	localStorage.setItem("serviceStatus", "stop");
	$(".disabled").style.display = "block";
	$(".enabled").style.display = "none";
	$("body").classList.remove("on");
}

_($("#enableSahaaya"), "click", function(){
	Sahaaya.startService();
});
_($("#disableSahaaya"), "click", function(){
	Sahaaya.stopService();
});


_(document, "DOMContentLoaded", function(){
	Sahaaya();
});