let view = document.getElementById("pageviews");
let cost = document.getElementById("costz");
let cost2 = document.getElementById("cost2");
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing");
let pageviews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener("input", function () {
  updateValue();
  view.innerHTML = pageviews[slider.value];

  let value = this.value * 25;
});

toggle.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValue();
});

function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[slider.value] * 0.75;
    costz.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
     costz.innerHTML = perMonth[slider.value];

  }
}
