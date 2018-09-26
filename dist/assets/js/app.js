"use strict";function scrollTo(e,o,t){if(!(t<=0)){var l=(o-window.scrollY)/t*10;l&&setTimeout(function(){window.scroll(0,window.scrollY+l),window.scrollY!==o&&scrollTo(e,o,t-10)},10)}}function navClick(e){e=e?e.toLowerCase():"bio";var o=document.getElementById(e);scrollTo(document.body,o.offsetTop,500)}for(var elements=document.querySelectorAll("li"),i=0;i<elements.length;i++)elements[i].addEventListener("click",function(e){navClick(e.target.innerText)},!1);var arrow=document.querySelector(".arrow");arrow.addEventListener("click",function(e){navClick(e.target.id)},!1),setInterval(function(){arrow.classList.toggle("flash")},3e3);var portfolio=document.querySelectorAll(".portfolio-item-box"),modal=document.querySelector(".modal-bg");for(i=0;i<portfolio.length;i++)portfolio[i].addEventListener("click",function(e){modalFilter(e.target.name),modal.classList.remove("hidden"),body.classList.add("modal-open")});var modalClose=document.getElementsByClassName("close-button")[0];modalClose.addEventListener("click",function(){modal.classList.add("hidden"),body.classList.remove("modal-open")}),window.addEventListener("click",function(e){e.target==modal&&(modal.classList.add("hidden"),body.classList.remove("modal-open"))});var modalItem=document.querySelectorAll(".portfolio-item"),currentModalId=0;function modalFilter(e){for(var o=0;o<modalItem.length;o++)modalItem[o].id===e?(currentModalId=o,modalItem[o].classList.remove("filtered")):modalItem[o].classList.add("filtered");modalButtonDisplay(currentModalId,modalItem.length-1)}var prevModal=document.querySelector(".modal-prev"),nextModal=document.querySelector(".modal-next");function modalButtonDisplay(e,o){prevModal.style.visibility="visible",nextModal.style.visibility="visible",0===e?prevModal.style.visibility="hidden":e===o&&(nextModal.style.visibility="hidden")}prevModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId-1))},!1),nextModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId+1))},!1);