




    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav ul').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }




//메뉴 선택
  //initiating jQuery  
  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp({

                    parts: {
                      0:'practice',
                      1:'setting',
                      2:'edit-lyrics',
                      3:'adjust-sync',
                      4:'fine-ture',
                      5:'recording',
                      6:'clip',
                      7:'trim',
                      8:'clip-sync',
                      9:'template'
                    },
                    itemClass: 'menuItem',
                    itemHover: 'active',
                    marginTop: '0px'
                  });
    });
  });





//동영상 스크롤 제어
var players = []
$('.video-preview').each(function() {
  players.push({
      player: new Vimeo.Player($(this).find("iframe").get(0)),
      top: $(this).position().top,
      status: "paused"
  })
});
var viewportHeight = $(window).height();

$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    for(var i=0; i<players.length;i++) {
      var elementFromTop = players[i].top - scrollPos;
      var status = (elementFromTop > 0 && elementFromTop < players[i].top + viewportHeight) ? "play" : "pause";   
      if(players[i].status != status) {
          players[i].status = status;
          players[i].player[status]();
          console.log(i, status);      
      }
    }
});
