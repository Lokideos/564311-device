var linkContactUs = document.querySelector(".contact-us-link");
var popupContactUs = document.querySelector(".modal-contact-us");
var closeContactUsPopup = popupContactUs.querySelector(".modal-close");

var linkMap = document.querySelector(".map-widget-link");
var popupMap = document.querySelector(".modal-map");
var closeMapPopup = popupMap.querySelector(".modal-close");

linkContactUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContactUs.classList.add("modal-show");
});

closeContactUsPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContactUs.classList.remove("modal-show");
});

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMapPopup.addEventListener("click", function(evt) {
  popupMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popupContactUs.classList.contains("modal-show") || popupMap.classList.contains("modal-show")) {
      popupContactUs.classList.remove("modal-show");
      popupMap.classList.remove("modal-show");
    }
  }
});