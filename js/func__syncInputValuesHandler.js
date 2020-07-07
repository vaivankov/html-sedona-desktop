'use strict';

(function () {
  window.syncInputValuesHandler = function () {
    let priceInputMinValue = +priceInputMin.value ,
      priceInputMaxValue = +priceInputMax.value ;
    if (priceInputMinValue > priceInputMaxValue) {
      priceInputMin.value = priceInputMaxValue;
      syncMinInputNMinSliderHandler();
      syncMinSliderNMinInputHandler();
      return;
    }
    if (priceInputMaxValue <= priceInputMinValue) {
      priceInputMax.value = priceInputMinValue;
      syncMaxInputNMaxSliderHandler();
      return;
    }
  }
})();

priceInputMin.addEventListener("input", syncInputValuesHandler);
priceInputMax.addEventListener("input", syncInputValuesHandler);