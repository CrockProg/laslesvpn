document.addEventListener("DOMContentLoaded", function() {

	$('.plan__carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		items: 1,
		responsive:{
			0:{
				items: 1,
				center: true,
				margin: 0,
			},
			767:{
				items: 2,
				center: true,
				loop: true,
			},
			1000:{
				items: 2,
				loop: true,
				center: true
			},
			1200:{
				items: 3,
				loop: false
			},
		}
	});

	new WOW().init();	

	
	$('.global__carousel').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		items: 5,
		responsive:{
			0:{
				items: 3
			},
			600:{
				items: 3,
			},
			1000:{
				items: 5,
				loop: false
			}
		}
	});
	$('.customers-carousel').owlCarousel({
		nav: true,
		margin: 20,
		dots: false,
		items: 3,
		responsive:{
			0:{
				items: 1,
				center: true,
				margin: 10,
			},
			767:{
				items: 2,
				center: true,
				loop: true,
			},
			1000:{
				items: 2,
				loop: true,
				center: true
			},
			1200:{
				items: 3,
			},			
		}
	});



	$(".header__btn").click(function() {
		$(".burger").toggleClass("burger--active");
		$(".header__nav").toggleClass("header__nav--active");	
	});



});
