$(function() {
  
    var $btn = $('#btnTop');
    var $home = $('main-content');
    var startpoint = $home.scrollTop() + $home.height();
    
    $(window).on('scroll', function() {
      if($(window).scrollTop() > startpoint) {
        $btn.show();
      } else {
        $btn.hide();
      }
    });
  });