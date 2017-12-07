
// Set header height to actual viewport height.
var body = document.getElementsByTagName('body')[0];
var header = document.getElementsByTagName('header')[0];

function setHeaderHeight() {
  var y = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;
  header.style.height = y + 'px';
}

window.addEventListener('resize', function() {
  setHeaderHeight();
});

setHeaderHeight();

// Smooth scroll buttons
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

function navClick(event) {
  var id = event.target.innerText.toLowerCase();
  var elmnt = document.getElementById(id);
  scrollTo(document.documentElement, elmnt.offsetTop, 500);
}

let elements = document.querySelectorAll('.main-nav li');
for (let element of elements) {
  element.addEventListener('click', navClick, false);
}

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
