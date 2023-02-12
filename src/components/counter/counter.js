const counter = document.querySelector(".counter-wrapper"); ///поменять на id
const cntMinusBtn = document.querySelector(".counter_minus-btn");
const cntPlusBtn = document.querySelector(".counter_plus-btn");
let counterInput = document.querySelector(".counter__value");

counter.addEventListener("click", (event) => {
  if (event.target.dataset.counterMinusBtn) {
    const { value } = counterInput;
    const numberValue = Number(value);
    if (numberValue === 1) {
      cntMinusBtn.classList.add("counter_inactive");
    } else if (numberValue === 0) {
      return;
    }

    counterInput.value = String(numberValue - 1);
    console.log(counterInput.value);
  } else if (event.target.dataset.counterPlusBtn) {
    cntMinusBtn.classList.remove("counter_inactive");
    const { value } = counterInput;
    const numberValue = Number(value);
    counterInput.value = String(numberValue + 1);
    console.log(counterInput.value);
  }
});
