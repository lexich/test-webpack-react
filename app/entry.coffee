require("./style.css");
$ = require("jquery")
content = require("./content.js")

$(document).ready ->
	$("body").text content + "\njquery3"
