// Menu

let isOpen = false;

function toggleMenu() {

  let timeoutA = (isOpen) ? 200 : 0;
  let timeoutB = (!isOpen) ? 300 : 0;

  let menu = document.querySelector("#menu");
  let hero = document.querySelector("#hero-image");
  let heroGradient = document.querySelector("#hero-image-over");
  let footer = document.querySelector("footer");
  let main = document.querySelector("main");

  // setTimeout(() => {
  main.classList.toggle("hide");
  menu.classList.toggle("hide");
  footer.classList.toggle("hide");
  // }, timeoutA);

  // setTimeout(() => {
  hero.classList.toggle("grow");
  heroGradient.classList.toggle("dark");
  // }, timeoutB);

  // disableScroll();
}

function disableScroll() {
  if (!isOpen) {
    isOpen = true;
    document.ontouchmove = function(e) {
      e.preventDefault();
    };
  } else {
    isOpen = false;
    document.ontouchmove = function(e) {
      return true;
    };
  }
}

// Chart.js

let ctx = document.getElementById('widget').getContext('2d');
let chart = new Chart(ctx, {

  // The type of chart
  type: 'line',

  // The dataset
  data: {
    labels: ["M-1", "M-1", "M-1", "M-1", "M-1", "M-1", "M-1"],
    datasets: [{
      label: false,
      backgroundColor: '#516bff80',
      borderColor: '#516bff',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  },

  // Configuration
  options: {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  }
});