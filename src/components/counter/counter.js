const counter = document.querySelector(".counter-wrapper");
const cntMinusBtn = document.querySelector(".counter__minus-button");
const cntPlusBtn = document.querySelector(".counter__plus-button");
let counterValue = document.querySelector(".counter__value");

counter.addEventListener("click", (event) => {
  if (event.target.className === "counter__minus-button") {
    counterValue.value--;
    counterValue.value = counterValue.value < 0 ? 0 : counterValue.value;
    console.log(counterValue.value);
  } else if (event.target.className === "counter__plus-button") {
    counterValue.value++;
    console.log(counterValue.value);
  }
});
