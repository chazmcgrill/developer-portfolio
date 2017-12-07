
// HEADER HEIGHT SETUP

var body = document.getElementsByTagName('body')[0];
var header = document.getElementsByTagName('header')[0];

// Finds height of window or client and resizes header.
function setHeaderHeight() {
  var y = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;
  header.style.height = y + 'px';
}

// on window resize height function is called.
window.addEventListener('resize', function() {
  setHeaderHeight();
});

setHeaderHeight();


// SMOOTH SCROLL

// Scroll function that animates the move to each section
function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) {
      return;
    }
    scrollTo(element, to, duration - 10);
  }, 10);
}

// Function that calls scroll to function with the corresponding id;
function navClick(event) {
  var id = event.target.innerText ? event.target.innerText.toLowerCase() : 'bio';
  var elmnt = document.getElementById(id);
  scrollTo(document.documentElement, elmnt.offsetTop, 500);
}

// Click events for navigation
let elements = document.querySelectorAll('.main-nav li, .footer-nav li');
for (let element of elements) {
  element.addEventListener('click', navClick, false);
}

// Click event for down arrow
let arrow = document.querySelector('.arrow');
arrow.addEventListener('click', navClick, false);



// Flashing header direction arrow

//   // arrow animation timer
//   var val = 'animated flash',
//       arrow = $('.arrow'),
//       count = 0;
//
//   setInterval(function animTimer() {
//
//     if (arrow.hasClass(val)) {
//       arrow.removeClass(val);
//     } else {
//       arrow.addClass(val);
//     }
//
//     count++;
//   }, 3000);
