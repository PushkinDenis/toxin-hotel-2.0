const selectList = document.querySelectorAll("[data-list]");
const selectInput = document.querySelectorAll("[data-select-input]");

selectInput.forEach((elem) => {
  elem.addEventListener("click", () => {
    const elemList = elem.parentNode.parentNode.nextSibling.nextSibling;
    if (elemList.className === "select_hided") {
      elemList.classList.remove("select_hided");
      elemList.classList.add("select__list");
    } else {
      elemList.classList.remove("select__list");
      elemList.classList.add("select_hided");
    }
  });
});
