// const ar = document.querySelector(".ar");
import startDay from "daterangepicker";
const startDate = document.querySelector(".input-field__start-date");
const endDate = document.querySelector(".input-field__end-date");
$(function () {
  const datepicker = $(".input-field__datepicker-wrapper").daterangepicker(
    {
      locale: {
        format: "DD.MM.YYYY",
        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],

        firstDay: 1,
        cancelLabel: "ОЧИСТИТЬ",
        applyLabel: "ПРИМЕНИТЬ",
      },
    },
    function () {
      startDate.value = this.startDate.format("DD.MM.YYYY");
      endDate.value = this.endDate.format("DD.MM.YYYY");
    }
  );
  let arrow =
    this.locale.direction == "ltr"
      ? { left: "chevron-right", right: "chevron-right" }
      : { left: "chevron-right", right: "chevron-right" };
});
