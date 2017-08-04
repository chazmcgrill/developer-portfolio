$('document').ready(function(){

  // navigation smooth scroll
  $(function() {
    smoothScroll(1500);
  });

  function smoothScroll(duration) {
  	$('a[href^="#"]').on('click', function(event) {
  	    var target = $( $(this).attr('href') );
  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
  }

  // arrow animation timer
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
