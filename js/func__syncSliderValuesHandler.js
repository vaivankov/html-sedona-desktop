'use strict';

(function () {
  window.syncSliderValuesHandler = function () {
    let sliderThumb = this;
    let sliderWrapper = sliderThumb.closest(".price-slider");
    let sliderTrack = sliderWrapper.querySelector(".slider-track");

    sliderTrack.style.setProperty(`--${sliderThumb.id}`, +sliderThumb.value);

  }
})();

sliderPriceMin.addEventListener("input", syncSliderValuesHandler);
sliderPriceMax.addEventListener("input", syncSliderValuesHandler);