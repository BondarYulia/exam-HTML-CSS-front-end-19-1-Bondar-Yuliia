$(document).ready(function(){
	$("#types-slider").owlCarousel({
		items: 3,
		autoplay: false,
		loop: true,
		nav: true,
		navText : ["prev","next"],
		responsive:{
			0: {
				items:1
			},

			800: {
				items:3
			}
		}

	});
});

$(document).ready(function(){
	$("#blog-slider").owlCarousel({
		items: 2,
		autoplay: false,
		loop: true,
		nav: true,
		navText : ["",""],
		responsive: {
			0: {
				items:1
			},

			900: {
				items:2
			}
		}

	});
});

$(document).ready(function(){
	$("#product-slider").owlCarousel({
		items: 4,
		autoplay: false,
		loop: true,
		nav: true,
		navText : ["",""],
		responsive: {
			0: {
				items:1
			}, 

			577: {
				items:2
			},

			1000: {
				items:4
			}
		}

	});
});

