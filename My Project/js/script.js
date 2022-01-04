jQuery(document).ready(function(){
	
	jQuery('.togglemenu').click(function(){
		jQuery('.main-manu').sliderToggle();
	});
	
	
	
	
	jQuery(window).on('scroll', function(){
		
		var scrollTop = jQuery(window).scrollTop();
		
		if(scrollTop >= 50){
			jQuery('.header-area').addClass('fixed');
		}else{
			jQuery('.header-area').removeClass('fixed');
		}
		
	});
	
	// Flexslider
	$(window).load(function(){
		
		$('.flexslider').flexslider({
			animation: "slide",
			directionNav: false,
		});

	})
	

});


