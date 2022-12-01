import { createPopper, flip } from "@popperjs/core";

const button = document.querySelector(".input-field__content-wrapper_select");
const tooltip = document.querySelector(".dropdown__list");

const popperInstance = createPopper(button, tooltip, {
  modifiers: [],
  placement: "bottom",
});

let dropdownShow = () => {
  let tooltipClass = tooltip.className;
  if (tooltipClass === "dropdown__list") {
    tooltip.classList.remove("dropdown__list");
    tooltip.classList.add("dropdown__list_active");
  } else {
    tooltip.classList.remove("dropdown__list_active");
    tooltip.classList.add("dropdown__list");
  }
};
button.addEventListener("click", () => {
  dropdownShow();
});
