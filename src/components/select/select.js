// import { createPopper, flip } from "@popperjs/core";
//
const selectInput = document.querySelector(".input-field__input-select");
const selectList = document.querySelector(".select__list");

// const popperInstance = createPopper(button, tooltip, {
//   modifiers: [],
//   placement: "bottom",
// });

// let dropdownShow = () => {
//   let tooltipClass = tooltip.className;
//   if (tooltipClass === "dropdown__list") {
//     tooltip.classList.remove("dropdown__list");
//     tooltip.classList.add("dropdown__list_active");
//   } else {
//     tooltip.classList.remove("dropdown__list_active");
//     tooltip.classList.add("dropdown__list");
//   }
// };
// let selectListShow = () => {
//   selectList.classList.toggle("_hided", false);
// };
selectInput.addEventListener("click", () => {
  selectList.classList.toggle("select_hided");
});
