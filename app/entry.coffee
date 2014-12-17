require("./style.css")
$ = require("jquery")
content = require("./content")
img1 = document.createElement("img")
img1.src = require("./cat.jpg")
jsx_loader = require("./jsx")

$(document).ready ->
	$div = $("<div>")
	$div.text content + "\njquery3"
	$div.append img1
	$("body").append $div
	$("body").append "<div id='react-entry' />"
	jsx_loader()
