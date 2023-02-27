const selectListArr = document.querySelectorAll("[data-list-id]");
const selectInputArr = document.querySelectorAll("[data-select-id]");
document.addEventListener("click", (event) => {
  if (event.target.dataset.selectId) {
    const selectId = event.target.dataset.selectId;
    const listId = selectListArr[+selectId].dataset.listId;
    if (selectId === listId) {
      const targetSelect = document.querySelector(
        `[data-list-id="${String(selectId)}"]`
      );
      if (targetSelect.className === "select_hided") {
        targetSelect.classList.remove("select_hided");
        targetSelect.classList.add("select__list");
      } else {
        targetSelect.classList.remove("select__list");
        targetSelect.classList.add("select_hided");
      }
    }
  }
});
