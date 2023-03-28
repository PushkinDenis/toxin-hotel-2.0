$(function () {
  $(".input-field__datepicker").daterangepicker({
    locale: {
      format: "DD.MM.YYYY",
      daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: [
        "Январь", // заменяем на Январь
        "Февраль", // Февраль и т д
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
  });
  let arrow =
    this.locale.direction == "ltr"
      ? { left: "chevron-right", right: "chevron-right" }
      : { left: "chevron-right", right: "chevron-right" };
});
