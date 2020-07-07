'use strict';

(function () {
  window.syncMinInputNMinSliderHandler = function () {
    sliderMin.value = priceInputMin.value;
  }
})();

priceInputMin.addEventListener("input", syncMinInputNMinSliderHandler);