"use strict";var body=document.getElementsByTagName("body")[0];function scrollTo(e,o,l){if(!(l<=0)){var n=(o-window.scrollY)/l*10;n&&setTimeout(function(){window.scroll(0,window.scrollY+n),window.scrollY!==o&&scrollTo(e,o,l-10)},10)}}function navClick(e){e=e?e.toLowerCase():"bio";var o=document.getElementById(e);scrollTo(document.body,o.offsetTop,500)}for(var navs=document.querySelectorAll(".nav--item"),i=0;i<navs.length;i++)navs[i].addEventListener("click",function(e){navClick(e.target.innerText)},!1);var arrow=document.querySelector(".arrow--icon");arrow.addEventListener("click",function(e){navClick(e.target.id)},!1);var burger=document.getElementById("burger"),nav=document.getElementById("nav"),navOpen=!1;function navToggle(){nav.classList.remove(navOpen?"nav-open":"nav-close"),nav.classList.add(navOpen?"nav-close":"nav-open"),burger.classList.toggle("is-opened"),navOpen=!navOpen}burger.addEventListener("click",navToggle),window.addEventListener("resize",function(){window.innerWidth>640&&(nav.classList.remove("nav-open"),nav.classList.remove("nav-close"),burger.classList.remove("is-opened"),navOpen=!1)}),setInterval(function(){arrow.classList.toggle("flash")},3e3);var folio=document.querySelectorAll(".project"),modalBg=document.querySelector(".modal-bg"),modal=document.querySelector(".modal");function handleModalOpen(e){modalFilter(e.target.id),modalBg.classList.remove("is-hidden"),modal.classList.remove("modal-close"),modal.classList.add("modal-open"),body.classList.add("is-fixed")}function handleModalClose(){modal.classList.remove("modal-open"),modal.classList.add("modal-close"),setTimeout(function(){modalBg.classList.add("is-hidden"),body.classList.remove("is-fixed")},300)}folio.forEach(function(e){return e.addEventListener("click",handleModalOpen)});var modalClose=document.getElementById("modal-close");modalClose.addEventListener("click",handleModalClose),window.addEventListener("click",function(e){e.target==modalBg&&handleModalClose()});var modalItems=document.querySelectorAll(".portfolio-item"),currentModalId=0;function modalFilter(e){for(var o=0;o<modalItems.length;o++)modalItems[o].id===e?(currentModalId=o,modalItems[o].classList.remove("is-filtered")):modalItems[o].classList.add("is-filtered");modalButtonDisplay(currentModalId,modalItems.length-1)}var prevModal=document.getElementById("modal-prev"),nextModal=document.getElementById("modal-next");function modalButtonDisplay(e,o){prevModal.style.visibility="visible",nextModal.style.visibility="visible",0===e?prevModal.style.visibility="hidden":e===o&&(nextModal.style.visibility="hidden")}prevModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId-1))},!1),nextModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId+1))},!1);