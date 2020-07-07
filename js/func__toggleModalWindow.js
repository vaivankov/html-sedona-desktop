'use strict';

(function () {
  window.toggleModalWindow = function (evt) {
    if (modalHotels.style.display === "block") {
      modalHotels.classList.add("modal-hide-animation");
      setTimeout(() => {
        modalHotels.style.display = "none";
        modalHotels.classList.remove("modal-hide-animation");
        modalHotels.classList.remove("modal-show-animation")
      }, 400);
    } else {
      modalHotels.style.display = "block";
      modalHotels.classList.add("modal-show-animation");
      setTimeout(() => {
        modalHotels.classList.remove("modal-hide-animation");
        modalHotels.classList.remove("modal-show-animation")
      }, 400);      
    };
  }
})();

btnHotels.addEventListener("click", toggleModalWindow);
