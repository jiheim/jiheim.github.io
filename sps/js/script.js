



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
                      4:'fine-tune',
                      5:'recording',
                      6:'clip',
                      7:'trim',
                      8:'clip-sync',
                      9:'template',
                      10:'share',
                      11:'language',
                      12:'search'
                    },
                    itemClass: 'menuItem',
                    itemHover: 'active',
                    marginTop: '0px'
                  });
    });

     var navWidth = $( '.navbar-wrapper' ).outerWidth() + 30;


      if($(window).width() > 1023) { 
          $( '.tutorial .container' ).css( "margin-left", navWidth );
        }


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








