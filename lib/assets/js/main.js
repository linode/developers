(function($) {

	Page = {
		isMobile: function() {
			// return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
			return $(window).width() <= 768;
		},
		Toggle: {
			init: function(element) {
				var $element = $(element);
				var $child = $($element.data("target"));

				if ($child.hasClass("in")) {
					$element.find(".toggle-open").show();
					$element.find(".toggle-closed").hide();
				} else {
					$element.find(".toggle-closed").show();
					$element.find(".toggle-open").hide();
				}
			},

			update: function(element) {
				var $element = $(element);
				if ($element.find(".toggle-closed").is(":visible")) {
					$element.find(".toggle-open").show();
					$element.find(".toggle-closed").hide();
				} else {
					$element.find(".toggle-closed").show();
					$element.find(".toggle-open").hide();
				}
			}
		}
	};

	// toggle
	$(".toggle").each(function(i, element) {
		Page.Toggle.init(element);
	});
	$(".toggle").click(function(event) {
		Page.Toggle.update($(event.target).parent()[0]);
	});

})(jQuery);