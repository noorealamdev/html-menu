(function ($) {
	("use strict");

	// Mobile Menu
	$("#main-menu").meanmenu({
		meanMenuContainer: "#mobile-navbar-menu",
		meanScreenWidth: "991",
		meanExpand: [
			"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
		],
	});
	//canvas sidebar
	var canva_expander = $(".canva_expander");
	if (canva_expander.length) {
		$(".canva_expander, #canva_close, #cm-overlay-bg2").on(
			"click",
			function (e) {
				e.preventDefault();
				$("body").toggleClass("canvas_expanded");
			}
		);
	}
})(jQuery);
