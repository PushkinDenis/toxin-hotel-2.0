const inputField = document.querySelector("[data-input-field]");
document.addEventListener("click", (event) => {
  if (event.target.dataset.inputField) {
    inputField.classList.toggle(".input-field_active");
  }
});
