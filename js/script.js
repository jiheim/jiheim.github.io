


$('.intro-menu-mobile').prepend('<button class="mobile-gnb-open"><i class="fa fa-bars" aria-hidden="true"></i></button>')


$('.mobile-gnb-open').click(function(){

	$('.intro-menu-mobile').prepend('<button class="mobile-gnb-close"></button>');

	$('.intro-menu-mobile-list').animate({
		top : "0"
	},"slow", "swing");

	$('.mobile-gnb-close').click(function(){
		$('.mobile-gnb-close').hide();
		$('.mobile-gnb-open').show();

		$('.intro-menu-mobile-list').animate({
			top : "-1000px"
		},"slow", "swing");
	});

})

		

