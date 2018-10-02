"use strict";var body=document.getElementsByTagName("body")[0],header=document.getElementsByTagName("header")[0];function scrollTo(e,t,o){if(!(o<=0)){var l=(t-window.scrollY)/o*10;l&&setTimeout(function(){window.scroll(0,window.scrollY+l),window.scrollY!==t&&scrollTo(e,t,o-10)},10)}}function navClick(e){e=e?e.toLowerCase():"bio";var t=document.getElementById(e);scrollTo(document.body,t.offsetTop,500)}for(var elements=document.querySelectorAll("li"),i=0;i<elements.length;i++)elements[i].addEventListener("click",function(e){navClick(e.target.innerText)},!1);var arrow=document.querySelector(".arrow--icon");arrow.addEventListener("click",function(e){navClick(e.target.id)},!1),setInterval(function(){arrow.classList.toggle("flash")},3e3);var portfolio=document.querySelectorAll(".project"),modal=document.querySelector(".modal-bg");for(i=0;i<portfolio.length;i++)portfolio[i].addEventListener("click",function(e){modalFilter(e.target.id),modal.classList.remove("is-hidden"),body.classList.add("is-fixed")});var modalClose=document.getElementById("modal-close");modalClose.addEventListener("click",function(){modal.classList.add("is-hidden"),body.classList.remove("is-fixed")}),window.addEventListener("click",function(e){e.target==modal&&(modal.classList.add("is-hidden"),body.classList.remove("is-fixed"))});var modalItem=document.querySelectorAll(".portfolio-item"),currentModalId=0;function modalFilter(e){for(var t=0;t<modalItem.length;t++)modalItem[t].id===e?(currentModalId=t,modalItem[t].classList.remove("is-filtered")):modalItem[t].classList.add("is-filtered");modalButtonDisplay(currentModalId,modalItem.length-1)}var prevModal=document.getElementById("modal-prev"),nextModal=document.getElementById("modal-next");function modalButtonDisplay(e,t){prevModal.style.visibility="visible",nextModal.style.visibility="visible",0===e?prevModal.style.visibility="hidden":e===t&&(nextModal.style.visibility="hidden")}prevModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId-1))},!1),nextModal.addEventListener("click",function(){modalFilter("pf"+(currentModalId+1))},!1);