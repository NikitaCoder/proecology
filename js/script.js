(function($) {
	$(document).ready(function() {

	var servicesDrop = $('.dropdown-services'),
		servicesLi = $('.services');


/*=============Sliders part=======================================*/
		$('.clients-wrap').slick({
		  dots: true,
		  arrows: false,
		  infinite: true,
		  autoplay: false,
		  autoplaySpeed: 5000,		  
		  speed: 900,
		  slidesToShow: 3,
		  slidesToScroll: 2,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 980,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 660,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});

		$('.top-slider').slick({
		  dots: false,
		  infinite: true,
		  autoplay: false,
		  autoplaySpeed: 5000,		  
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1
		});


/*====================Events==============================*/		

	servicesLi.mouseover(function(){
		$(this).find(' > a').css({
    		'background' : '#0FBE7C',
    		'color' : '#fff'
		});
		servicesDrop.stop().fadeIn(200);
	});
	servicesLi.mouseout(function(){
		$(this).find(' > a').css({
    		'background' : 'none',
    		'color' : '#342e33'
		});
		servicesDrop.stop().fadeOut(200);
	});

	$('.company-img').click(function(){
		$(this).attr('src', '../img/baron2.jpg');
	})

	});
}) (jQuery);		