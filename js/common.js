/*-------------------------------

	PRE_LOADER.JS

-------------------------------*/
$(window).on("load", function() {
    $(".preloader").hide();    
});

/*-------------------------------

	SEARCH.JS

-------------------------------*/
    
	//$('#search-menu').removeClass('toggled');

	$('#search-open').click(function(e) {
		e.stopPropagation();
		$('#search-menu').toggleClass('toggled');
		$("#popup-search").focus();
	});
	
	$('#search-menu input').click(function(e) {
	//	e.stopPropagation();
	});

	$('#search-menu, body').click(function() {
		$('#search-menu').removeClass('toggled');
	});


/*-------------------------------

	CART POP-UP.JS

-------------------------------*/

$(document).ready(function(){
    $("#cart-open").click(function(e){
		e.stopPropagation();
        $("#cart-pop-up").slideToggle("500");
	});
});
$(document).click(function(){
	$("#cart-pop-up").slideUp("500");
});

/*-------------------------------

	SIGN IN POP-UP.JS

-------------------------------*/

$(document).ready(function(){
	$("#signin-pop-up").hide();
    $("#signin-open").click(function(){
		$("#signin-pop-up").slideToggle("500");
	});
	$("#signin-close").click(function(){
		$("#signin-pop-up").slideUp("fast");	
	})
});


/*-------------------------------

	SLIDER.JS

-------------------------------*/
$( document ).ready(function() {

	// Seclect JS
	$('.selectpicker').selectpicker();
   
	// what can with Kliqstart slider
	var owl = $('.box-slider, .testimonial');
	owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
		if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-next', element).toggleClass('hidden', current === carousel.maximum());
		$('.owl-prev', element).toggleClass('hidden', current === carousel.minimum());
		$('.owl-stage', element).toggleClass('stage-right', current === carousel.maximum());
		$('.owl-stage', element).toggleClass('stage-left', current === carousel.minimum());
	});
	$('.box-slider').owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		dots:true,
		items:4,
		autoplayTimeout:3000,
		responsive:{
			0:{
				items:1,
				autoplay:true,
				stagePadding: 10,
				margin: 2

			},
			600:{
				items:2,
				autoplay:true,
				stagePadding: 10,
				margin: 2
			},
			768:{
				items:2,
				autoplay:true,
			},
			992:{
				items:4,
				autoplay:true,
			},
			1000:{
				items:4
			}
		}
	});

	// What Our Clients Say slider
	$('.testimonial').owlCarousel({
		loop:true,
		margin:20,
		items: 2,
		nav:true,
		dots:true,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				margin:2
			},
			600:{
				items:1,
				nav:false,
				margin:2
			},
			1000:{
				items:2
			}
		}
	})
	

});

/* $(document).ready(function () {
    if(navigator.userAgent.indexOf('MSIE') > 0)

		var bigbrother;
		var winwidth = $(window).innerWidth(600);

		$('.pkg-text, .testimonial-box').each(function() {
			bigbrother = bigbrother > jQuery(this).height() ? bigbrother : jQuery(this).height();
		});

		$('.pkg-text, .testimonial-box').each(function() {
			$(this).height(bigbrother);

			$(window).on("load",function(){
				if(winwidth > 600){
					$('.pkg-text, .testimonial-box').height(auto);
				}
			});
		});
}); */
$(document).ready(function($) {

	var bigbrother;
	var winwidth = $(window).innerWidth(600);

	$('.testimonial-box').each(function() {
		bigbrother = bigbrother > jQuery(this).height() ? bigbrother : jQuery(this).height();
	});

	$('.testimonial-box').each(function() {
		$(this).height(bigbrother);

		$(window).on("load",function(){
			if(winwidth > 600){
	 			$('.testimonial-box').height(auto);
			}
		});
	});
});


/*-------------------------------

	COUNTER.JS

-------------------------------*/
$(document).ready(function() {
	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
});