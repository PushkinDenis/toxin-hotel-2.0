const counters = document.querySelectorAll("[data-counter]");
let totalCnt = 0;
counters.forEach((counter) => {
  const selInpElem =
    counter.previousSibling.parentNode.previousSibling.parentNode
      .previousSibling.parentNode.firstChild.lastChild.firstChild;
  let cntValue = 0;
  const cntMinusBtn = counter.firstChild.nextSibling;
  const cntPlusBtn =
    counter.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
  const cntInpVal = counter.firstChild.nextSibling.nextSibling;
  cntMinusBtn.addEventListener("click", (event) => {
    if (cntInpVal.value > 0) {
      cntInpVal.value = --cntValue;
      --totalCnt;
      selInpElem.value = `${totalCnt} гостя`;
    }
    if (totalCnt > 0) {

      counter.parentNode.parentNode.lastChild.previousSibling.firstChild.nextSibling.textContent =
        "ОЧИСТИТЬ";
    } else {
      counter.parentNode.parentNode.lastChild.previousSibling.firstChild.nextSibling.textContent =
        "";
    }
    if (cntInpVal.value <= 0){
      cntMinusBtn.classList.add('counter_inactive')
    }
  });
  cntPlusBtn.addEventListener("click", (event) => {
    cntInpVal.value = ++cntValue;
    ++totalCnt;
    selInpElem.value = `${totalCnt} гостя`;

    if (totalCnt > 0) {

      counter.parentNode.parentNode.lastChild.previousSibling.firstChild.nextSibling.textContent =
        "ОЧИСТИТЬ";
    } else {

      counter.parentNode.parentNode.lastChild.previousSibling.firstChild.nextSibling.textContent =
        "";
    }
    if(cntInpVal.value >0){
      cntMinusBtn.classList.remove('counter_inactive')
    }
  });
  let clrBtn =
    counter.parentNode.parentNode.lastChild.previousSibling.firstChild
      .nextSibling;
  clrBtn.addEventListener("click", () => {
    selInpElem.value = 0;
    totalCnt = 0;
    selInpElem.value = "";
    cntValue = 0;
  });
});
