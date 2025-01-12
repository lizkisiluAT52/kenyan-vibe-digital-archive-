
$('.basicslider').flexslider({
	slideshow: false, // Change to "true" to make the slides slide automatically
	animation: "slide",
	animationLoop: false,
	pauseOnHover: true,
	controlNav: false,
	directionNav: true,
	prevText: "Prev",
	nextText: "Next",
	smoothHeight: true,
	start: function(slider) {
		$('body').removeClass('loading');
	}
});