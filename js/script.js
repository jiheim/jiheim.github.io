


$('.intro-menu').prepend('<button class="mobile-gnb-open"><i class="fa fa-bars" aria-hidden="true"></i></button>')

var winWidth = 0; 
$(window).resize(function() {
 winWidth = $(document).width();
});


if(winWidth < 767){
	$('.mobile-gnb-open').click(function(){

		$('.intro-menu').prepend('<button class="mobile-gnb-close"><img src="img/close.svg" alt="" /></button>');

		$('.intro-menu-list').animate({
			top : "0"
		},"slow", "swing");

		$('.mobile-gnb-close').click(function(){
			$('.mobile-gnb-close').hide();
			$('.mobile-gnb-open').show();

			$('.intro-menu-list').animate({
				top : "-1000px"
			},"slow", "swing");
		});

	})

}else{
	$('.mobile-gnb-open').unbind('click');
	$('.intro-menu-list').css('top','97vh');
}

		

