(function($) {
	$(function() {
		$(window).on('load resize', function() {
			sticky();
		});

		function sticky() {
			var w = $(window).width();

			if (w < 750) {
				$('.card article').trigger('sticky_kit:detach');
			} else {
				$('.card article').stick_in_parent({
					offset_top: $('.header').outerHeight()
				});
			}
		}
	});

	var sr = ScrollReveal({
		origin   : "bottom",
		distance : "64px",
		duration : 900,
		delay    : 0,
		scale    : 1
	});

	sr.reveal('.card li');
}(jQuery));