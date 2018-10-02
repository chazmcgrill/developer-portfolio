"use strict";var body=document.getElementsByTagName("body")[0],header=document.getElementsByTagName("header")[0];function scrollTo(e,o,l){if(!(l<=0)){var t=(o-window.scrollY)/l*10;t&&setTimeout(function(){window.scroll(0,window.scrollY+t),window.scrollY!==o&&scrollTo(e,o,l-10)},10)}}function navClick(e){e=e?e.toLowerCase():"bio";var o=document.getElementById(e);scrollTo(document.body,o.offsetTop,500)}for(var elements=document.querySelectorAll("li"),i=0;i<elements.length;i++)elements[i].addEventListener("click",function(e){navClick(e.target.innerText)},!1);var arrow=document.querySelector(".arrow--icon");arrow.addEventListener("click",function(e){navClick(e.target.id)},!1),setInterval(function(){arrow.classList.toggle("flash")},3e3);var portfolio=document.querySelectorAll(".project"),modalBg=document.querySelector(".modal-bg"),modal=document.querySelector(".modal");for(i=0;i<portfolio.length;i++)portfolio[i].addEventListener("click",function(e){modalFilter(e.target.id),modalBg.classList.remove("is-hidden"),modal.classList.remove("modal-close"),modal.classList.add("modal-open"),body.classList.add("is-fixed")});var modalClose=document.getElementById("modal-close");modalClose.addEventListener("click",function(){modal.classList.remove("modal-open"),modal.classList.add("modal-close"),setTimeout(function(){modalBg.classList.add("is-hidden"),body.classList.remove("is-fixed")},300)}),window.addEventListener("click",function(e){e.target==modalBg&&(modal.classList.remove("modal-open"),modal.classList.add("modal-close"),setTimeout(function(){modalBg.classList.add("is-hidden"),body.classList.remove("is-fixed")},300))});var modalItem=document.querySelectorAll(".portfolio-item"),currentModalId=0;function modalFilter(e){for(var o=0;o<modalItem.length;o++)modalItem[o].id===e?(currentModalId=o,modalItem[o].classList.remove("is-filtered")):modalItem[o].classList.add("is-filtered");modalButtonDisplay(currentModalId,modalItem.length-1)}var prevModal=document.getElementById("modal-prev"),nextModal=document.getElementById("modal-next");function modalButtonDisplay(e,o){prevModal.style.visibility="visible",nextModal.style.visibility="visible",0===e?prevModal.style.visibility="hidden":e===o&&(nextModal.style.visibility="hidden")}prevModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId-1))},!1),nextModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId+1))},!1);