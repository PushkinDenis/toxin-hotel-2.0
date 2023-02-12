const selectInput = document.querySelector(".input-field__select");
const selectList = document.querySelector(".select__list");

selectInput.addEventListener("click", () => {
  selectList.classList.toggle("select_hided");
});
