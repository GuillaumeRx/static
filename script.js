$(document).ready(function() {
	var about = $('#about');
    $('#show').click(() => about.css("display", "flex").hide().fadeIn(500));
	$('#hide').click(() => about.fadeOut(500));
});