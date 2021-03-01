$(document).ready(function(){
	$("nav.menu a").click(function (e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	});

	sectionAnimator();
	floatingMenuAnimator();
	$(window).scroll(sectionAnimator);
	$(window).scroll(floatingMenuAnimator);
});

function sectionAnimator () {
	var elements = $(".common_section");
	var window_height = parseInt($(window).height());
	var window_trigger = window_height / 2 + 100;
	var actual_position = parseInt($(window).scrollTop());

	elements.each(function () {
		var element_top = parseInt($(this).offset().top);
		if ((actual_position + window_trigger) > element_top) {
			$(this).find(".section_inner").removeClass("fadeOutUp").addClass("fadeInUp");
			setActiveSection($(this).attr("id"));
		} else {
			$(this).find(".section_inner").removeClass("fadeInUp").addClass("fadeOutUp");
		}
	});
}

function floatingMenuAnimator() {
	var element = $(".floating_menu");
	var window_height = parseInt($(window).height());
	var actual_position = parseInt($(window).scrollTop());

	if (actual_position > window_height) {
		element.addClass("active");
	} else {
		element.removeClass("active");
	}
}

function setActiveSection(id) {
	var element = $(".floating_menu");

	element.find(`.menu_item[href='#${id}']`).addClass("active");
	element.find(`.menu_item[href!='#${id}']`).removeClass("active");
}