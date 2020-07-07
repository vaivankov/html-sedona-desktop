'use strict';

(function () {
  window.syncMaxSliderNMaxInputHandler = function () {
    priceInputMax.value = sliderMax.value;
  }
})();

sliderMax.addEventListener("input", syncMaxSliderNMaxInputHandler);