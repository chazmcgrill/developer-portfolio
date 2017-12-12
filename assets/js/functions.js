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
  var difference = to - window.scrollY;
  var perTick = difference / duration * 10;

  if (perTick) {
    setTimeout(function() {
      window.scroll(0, window.scrollY + perTick);
      if (window.scrollY === to) {
        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);
  }
}

// Function that calls scroll to function with the corresponding id;
function navClick(navId) {
  navId = navId ? navId.toLowerCase() : 'bio';
  var section = document.getElementById(navId);
  scrollTo(document.body, section.offsetTop, 500);
}

// Click events for navigation
var elements = document.querySelectorAll('li');
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


// MODAL CONTROLS

// show modal
var portfolio = document.querySelectorAll('.portfolio-item-box');
var modal = document.querySelector('.modal-bg');

for (var i = 0; i < portfolio.length; i++) {
  portfolio[i].addEventListener('click', function(event) {
    modalFilter(event.target.name);
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  });
}

// close modal via button
var modalClose = document.getElementsByClassName('close-button')[0];

modalClose.addEventListener('click', function() {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
});

// close modal by clicking outside modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

// show selected modal item
var modalItem = document.querySelectorAll('.portfolio-item');
var currentModalId;

function modalFilter(modalId) {
  for (var i = 0; i < modalItem.length; i++) {
    if (modalItem[i].id === modalId) {
      currentModalId = i;
      modalItem[i].classList.remove('filtered');
    } else {
      modalItem[i].classList.add('filtered');
    }
  }
  modalButtonDisplay(currentModalId, modalItem.length - 1)
}

// modal previous and next buttons
var prevModal = document.querySelector('.modal-prev');
var nextModal = document.querySelector('.modal-next');

prevModal.addEventListener('click', function() {
  modalFilter("pf" + (currentModalId - 1));
}, false);

nextModal.addEventListener('click', function() {
  modalFilter("pf" + (currentModalId + 1));
}, false);

// remove prev or next at limit of items
function modalButtonDisplay(id, max) {
  prevModal.style.visibility = "visible";
  nextModal.style.visibility = "visible";

  if (id === 0) {
    prevModal.style.visibility = "hidden";
  } else if (id === max) {
    nextModal.style.visibility = "hidden";
  }
}
