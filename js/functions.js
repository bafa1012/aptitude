function positionElements () {
	bottom.css({ "top": absolutebottomTop + "px" });
}

function resizebottom(height) {
	bottom.height(bottomMinHeight + $( window ).height() * height);
	content.height(bottom.height() - $( window ).height() * 0.06);
}

function moveImage(top) {
	var picMove = $( window ).height() * top;
	$("#image").css({ "top": 0 - picMove });
}

function topMenuTransparency() {
	var transparency = (0.8 / 0.44) * (1 - relativeAbsolutebottomTop - 0.36);
	$("#top-menu").css({ "background": "rgba(0, 0, 0, " + transparency + ")"});
}

function mainMenuTransparency() {
	var transparency = 0.8 + (0.2 / 0.44) * (1 - relativeAbsolutebottomTop - 0.36);
	$("#main-menu").css({ "background": "rgba(0, 0, 0, " + transparency + ")"});
}