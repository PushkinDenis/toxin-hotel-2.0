const startDate = document.querySelector(".input-field__start-date");
const endDate = document.querySelector(".input-field__end-date");
const dateSelect = document.querySelector(".input-field__input-date-select");

$(function () {
  const datepicker = $("[date-datepicker]").daterangepicker(
    {
      locale: {
        language: "ru",
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
      dateSelect.value =
        this.startDate.locale("ru").format("DD MMMM") +
        " - " +
        this.endDate.locale("ru").format("DD MMMM");
    }
  );
  let arrow =
    this.locale.direction == "ltr"
      ? { left: "chevron-right", right: "chevron-right" }
      : { left: "chevron-right", right: "chevron-right" };
});
