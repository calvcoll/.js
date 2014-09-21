var cashmereCSS = function() {
	/* type is either "light" or "dark" */
	var type = "light";
	var style = "";
	$.get("//github.com/pixeldesu/cashmere/releases/download/v1.1.0/cashmere-" + type + ".css", function (data) {
		style = data;
	}).done(function () {
		style = style.replace('http://puu.sh/94OvX.png', '');
		styletag = $(document).add("style").html(style);
	}).error(function () {
		alert("something went very, very wrong");
	});
}

var documentReady = function() {
	console.log("dotjs started");

	cashmereCSS();
}

$(document).ready(documentReady)
