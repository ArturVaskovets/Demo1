$(document).ready(function(){
	$("nav.menu a").click(function (e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	});

	animator();
	$(window).scroll(animator);
});

function animator () {
	var elements = $(".common_section");
	var window_height = parseInt($(window).height());
	var window_trigger = window_height / 2 + 100;
	var actual_position = parseInt($(window).scrollTop());

	elements.each(function () {
		var element_top = parseInt($(this).offset().top);
		if ((actual_position + window_trigger) > element_top) {
			$(this).find(".section_inner").removeClass("fadeOutUp").addClass("fadeInUp");
		} else {
			$(this).find(".section_inner").removeClass("fadeInUp").addClass("fadeOutUp");
		}
	});
}