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
}

// Widget Config
let slider = document.getElementById("myRange");
let months = document.getElementById("months");
let deposit = document.getElementById("deposit");
let isChecked = document.getElementById("type");

months.innerHTML = slider.value;
slider.oninput = function() {
  months.innerHTML = this.value;
};

// Update Chart
function updateWidget() {
  // return 3.62 for ETH or 6.11 for BTC
  let yeild = (!isChecked.checked) ? 3.62 : 6.11;
  // Test data
  chart.data.datasets[0].data[6] = months.innerHTML * deposit.value + yeild;
  // Update
  chart.update();
}

// Chart.js
let ctx = document.getElementById('widget').getContext('2d');
let chart = new Chart(ctx, {

  // The type of chart
  type: 'line',
  // The dataset
  data: {
    labels: ["M-1", "M-2", "M-3", "M-4", "M-5", "M-6", "M-7"],
    datasets: [{
      label: false,
      backgroundColor: '#516bff80',
      borderColor: '#516bff',
      data: [0, 10, 5, 2, 20, 30, months.innerHTML],
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