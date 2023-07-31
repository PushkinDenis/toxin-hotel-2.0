const checklist = document.querySelectorAll("[data-checklist-wrapper]");
checklist.forEach((bulList) => {
  bulList.addEventListener("click", () => {
    const checkUl = bulList.firstChild.nextSibling.lastChild.previousSibling;
    const checkLb = bulList.firstChild.nextSibling;
    console.log(checkLb);
    if (checkUl.className === "checkbox-list_hide") {
      checkUl.classList.remove("checkbox-list_hide");
      checkUl.classList.add("checkbox-list__ul");
      checkLb.classList.remove("checkbox-list_closed");
    } else {
      checkUl.classList.remove("checkbox-list__ul");
      checkUl.classList.add("checkbox-list_hide");
      checkLb.classList.add("checkbox-list_closed");
    }
  });
});
