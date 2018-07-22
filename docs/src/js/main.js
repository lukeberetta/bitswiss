// Mobile menu
let isOpen = false;

function toggleMenu() {

  let timeoutA = (isOpen) ? 200 : 0;
  let timeoutB = (!isOpen) ? 300 : 0;

  let menu = document.querySelector(".menu");
  let list = document.querySelector(".menu-list");
  let body = document.querySelector("body");
  let footer = document.querySelector("footer");
  let header = document.querySelector(".container");

  setTimeout(() => {
    menu.classList.toggle("hide");
    body.classList.toggle("no-scroll");
    footer.classList.toggle("hide");
    header.classList.toggle("card");
  }, timeoutA);

  setTimeout(() => {
    list.classList.toggle("grow");
  }, timeoutB);

  disableScroll();
}

function disableScroll() {
  if (isOpen) {
    isOpen = false;
    document.ontouchmove = function(e) {
      e.preventDefault();
    };
  } else {
    isOpen = true;
    document.ontouchmove = function(e) {
      return true;
    };
  }
}