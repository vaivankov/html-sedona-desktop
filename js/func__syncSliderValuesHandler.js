'use strict';

(function () {
  window.syncSliderValuesHandler = function () {
    let sliderMinValue = +sliderMin.value ,
      sliderMaxValue = +sliderMax.value ;
    if (sliderMinValue > sliderMaxValue) {
      sliderMin.value = sliderMaxValue;
      syncMinSliderNMinInputHandler();
      syncMinInputNMinSliderHandler();
      return;
    }
    if (sliderMaxValue <= sliderMinValue) {
      sliderMax.value = sliderMinValue;
      syncMaxSliderNMaxInputHandler();
      syncMaxInputNMaxSliderHandler();
      return;
    }
  }
})();

sliderMin.addEventListener("input", syncSliderValuesHandler);
sliderMax.addEventListener("input", syncSliderValuesHandler);