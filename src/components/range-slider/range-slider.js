import noUiSlider from 'nouislider';

// require("nouislider/dist/nouislider");
// require("nouislider/dist/nouislider.css");
const rangeSlider = document.querySelector('[data-range-slider]');
const rangeSliderVal = document.querySelector('[data-range-slider-values]')
noUiSlider.create(rangeSlider, {

    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    },
    format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            const val = Math.round(value).toLocaleString('ru');
            return val + ' ₽';
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (val) {
            return Number(val.replace(',-', ''));
        }
    }


});
rangeSlider.noUiSlider.on('update', function (values) {
    rangeSliderVal.innerHTML = values.join(' - ');
});