'use strict';

(function () {
  window.syncMinSliderNMinInputHandler = function () {
    priceInputMin.value = sliderMin.value;
  }
})();

sliderMin.addEventListener("input", syncMinSliderNMinInputHandler);