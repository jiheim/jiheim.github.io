jQuery(document).ready(function ($) {
 
 
    //initialise Stellar.js
    $(window).stellar();
 
    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button,.top a');
    mywindow = $(window);
    htmlbody = $('html,body');
 
 
    //Setup waypoints plugin
    slide.waypoint(function (direction,event) {

dataslide = $(this).attr('data-slide');

if (direction === 'up') {
$('.navigation li[data-slide="' + (dataslide-1) + '"]').addClass('active').siblings().removeClass('active');
} else {
$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').siblings().removeClass('active');
}
});
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
 
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
 
 
 
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
 
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
 
    });
 
 
});