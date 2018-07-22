// Mobile menu
function toggleMenu() {

  let menu = document.querySelector(".menu");
  let list = document.querySelector(".menu-list");
  let body = document.querySelector("body");
  let footer = document.querySelector("footer");
  let header = document.querySelector(".container");

  menu.classList.toggle("hide");
  body.classList.toggle("no-scroll");
  footer.classList.toggle("hide");
  header.classList.toggle("card");
  setTimeout(() => {
    list.classList.toggle("grow");
  }, 300);
}