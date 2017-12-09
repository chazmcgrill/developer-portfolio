// HEADER HEIGHT SETUP

var body = document.getElementsByTagName('body')[0];
var header = document.getElementsByTagName('header')[0];

// Finds height of window or client and resizes header.
function setHeaderHeight() {
  var y = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;
  header.style.height = y + 'px';
}

// on window resize height function is called.
// window.addEventListener('resize', function() {
//   setHeaderHeight();
// });

setHeaderHeight();


// SMOOTH SCROLL

// Scroll function that animates the move to each section
function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return;
  }
  var difference = to - window.scrollY;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    window.scroll(0, window.scrollY + perTick);
    if (window.scrollY === to) {
      return;
    }
    scrollTo(element, to, duration - 10);
  }, 10);
}

// Function that calls scroll to function with the corresponding id;
function navClick(id) {
  var id = id ? id.toLowerCase() : 'bio';
  var section = document.getElementById(id);
  scrollTo(document.body, section.offsetTop, 500);
}

// Click events for navigation
var elements = document.querySelectorAll('.main-nav li, .footer-nav li');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(event) {
    navClick(event.target.innerText);
  }, false);
}

// Click event for down arrow
var arrow = document.querySelector('.arrow');
arrow.addEventListener('click', function(event) {
  navClick(event.target.id);
}, false);


// FLASHING ARROW

setInterval(function() {
  arrow.classList.toggle('flash');
}, 3000);
