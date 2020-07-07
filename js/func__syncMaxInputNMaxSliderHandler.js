'use strict';

(function () {
  window.syncMaxInputNMaxSliderHandler = function () {
    sliderMax.value = priceInputMax.value;
  }
})();

priceInputMax.addEventListener("input", syncMaxInputNMaxSliderHandler);