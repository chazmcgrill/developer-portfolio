$('document').ready(function(){

  // navigation scroll
  $('a[href*="#"]:not([href="#"])').click(function () {
    if(location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }

    }
  });

  // Arrow animation timer
  var val = 'animated flash',
      arrow = $('.arrow'),
      count = 0;

  setInterval(function animTimer() {

    if (arrow.hasClass(val)) { 
      arrow.removeClass(val);
    } else {
      arrow.addClass(val);
    }

    count++;
  }, 3000);


});
