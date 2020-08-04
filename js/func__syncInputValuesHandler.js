'use strict';

(function () {
  window.syncInputValuesHandler = function () {
    let input = this;
    let sliderWrapper = input.closest(".price-slider-wrapper");
    let sliderThumb = sliderWrapper.querySelector(`.price-slider-${this.dataset.position}`);
    let sliderTrack = sliderWrapper.querySelector(".slider-track");

    sliderTrack.style.setProperty(`--${sliderThumb.id}`, +sliderThumb.value);

  }
})();

inputPriceMin.addEventListener("change", syncInputValuesHandler);
inputPriceMax.addEventListener("change", syncInputValuesHandler);