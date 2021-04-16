var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

_($("#enableSahaaya"), "click", function() {
	alert("X");
});