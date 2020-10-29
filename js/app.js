document.addEventListener("DOMContentLoaded", function() {

	$('.plan-carousel').owlCarousel({
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

	$('.sponsor-carousel').owlCarousel({
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



	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".menu").toggleClass("active");	
		$("header").toggleClass("active");
	});


	$(".toggle_menu").click(function() {
		if($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);		
		} else{
			$(".top_mnu").fadeIn(600);		
	}});


});
