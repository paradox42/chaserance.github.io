$(document).ready(function() {
	$("#cl").mouseenter(function spin() {
		$("#cl").css("animation", "x 1s linear 0s infinite");
    });
});

$(document).ready(function() {
	$("#cl").mouseleave(function goback() {
		$("#cl").css("animation", "x 15s linear 0s infinite");
    });
});