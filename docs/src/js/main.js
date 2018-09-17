// Menu
let isOpen = false;

function toggleMenu() {

  let timeoutA = (isOpen) ? 200 : 0;
  let timeoutB = (!isOpen) ? 300 : 0;

  let menu = document.querySelector("#menu");
  let hero = document.querySelector("#hero-image");
  let footer = document.querySelector("footer");
  let main = document.querySelector("main");

  // setTimeout(() => {
  main.classList.toggle("hide");
  menu.classList.toggle("hide");
  footer.classList.toggle("hide");
  // }, timeoutA);

  // setTimeout(() => {
  hero.classList.toggle("grow");
  // }, timeoutB);

  // disableScroll();
}

// function disableScroll() {
//   if (!isOpen) {
//     isOpen = true;
//     document.ontouchmove = function(e) {
//       e.preventDefault();
//     };
//   } else {
//     isOpen = false;
//     document.ontouchmove = function(e) {
//       return true;
//     };
//   }
// }