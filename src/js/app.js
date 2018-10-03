const body = document.getElementsByTagName('body')[0];

// SMOOTH SCROLL

// Scroll function that animates the move to each section
function scrollTo(element, to, duration) {
  if (duration <= 0) return;

  let difference = to - window.scrollY;
  let perTick = difference / duration * 10;

  if (perTick) {
    setTimeout(() => {
      window.scroll(0, window.scrollY + perTick);
      if (window.scrollY === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
}

// HAMBURGER

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

let navOpen = true;

burger.addEventListener('click', () => {
  if (navOpen) {
    nav.classList.remove('nav-close');
    nav.classList.add('nav-open');
  } else {
    nav.classList.remove('nav-open');
    nav.classList.add('nav-close');  
  }
  navOpen = !navOpen;
});

function navToggle() {

}

// Function that calls scroll to function with the corresponding id;
function navClick(navId) {
  navId = navId ? navId.toLowerCase() : 'bio';
  const section = document.getElementById(navId);
  scrollTo(document.body, section.offsetTop, 500);
}

// Click events for navigation
const navs = document.querySelectorAll('.nav--item');
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener('click', (e) => {
    navClick(e.target.innerText);
  }, false);
}

// Click event for down arrow
const arrow = document.querySelector('.arrow--icon');
arrow.addEventListener('click', (e) => {
  navClick(e.target.id);
}, false);


// FLASHING ARROW
setInterval(() => {
  arrow.classList.toggle('flash');
}, 3000);


// MODAL CONTROLS

const folio = document.querySelectorAll('.project');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');

function handleModalOpen(e) {
  modalFilter(e.target.id);
  modalBg.classList.remove('is-hidden');
  modal.classList.remove('modal-close');
  modal.classList.add('modal-open');
  body.classList.add('is-fixed');
}

function handleModalClose() {
  modal.classList.remove('modal-open');
  modal.classList.add('modal-close');
  setTimeout(() => {
    modalBg.classList.add('is-hidden');
    body.classList.remove('is-fixed');
  }, 300);
}

// Projects Click Event - Opens Modal
folio.forEach(f => f.addEventListener('click', handleModalOpen));

// Modal Close Button Click Event
const modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', handleModalClose);

// Click Outside Modal Click Event
window.addEventListener('click', (e) => {
  if (e.target == modalBg) handleModalClose();
});

// show selected modal item
const modalItems = document.querySelectorAll('.portfolio-item');
let currentModalId = 0;

function modalFilter(modalId) {
  for (let i = 0; i < modalItems.length; i++) {
    if (modalItems[i].id === modalId) {
      currentModalId = i;
      modalItems[i].classList.remove('is-filtered');
    } else {
      modalItems[i].classList.add('is-filtered');
    }
  }
  modalButtonDisplay(currentModalId, modalItems.length - 1)
}

// modal previous and next buttons
const prevModal = document.getElementById('modal-prev');
const nextModal = document.getElementById('modal-next');

prevModal.addEventListener('click', () => {
  modalFilter("pf" + (currentModalId - 1));
}, false);

nextModal.addEventListener('click', () => {
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
