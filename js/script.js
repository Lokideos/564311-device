var linkContactUs = document.querySelector(".contact-us-link");
var popupContactUs = document.querySelector(".modal-contact-us");
var closeContactUsPopup = popupContactUs.querySelector(".modal-close");

var linkMap = document.querySelector(".map-widget-link");
var popupMap = document.querySelector(".modal-map");
var closeMapPopup = popupMap.querySelector(".modal-close");

var contactUsSubmit = popupContactUs.querySelector(".submit")

var contactForm = popupContactUs.querySelector(".contact-us-form")
var contactName = popupContactUs.querySelector(".contact-us-name");
var contactEmail = popupContactUs.querySelector(".contact-us-email");
var contactText = popupContactUs.querySelector(".contact-us-text");

var promoSliders = document.querySelectorAll(".featured-products-list-item");
var promoSlidersControls = document.querySelectorAll(".slider-input");
var promoFirstSliderSelectors = document.querySelectorAll(".slider-label-1");
var promoSecondSliderSelectors = document.querySelectorAll(".slider-label-2");
var promoThirdSliderSelectors = document.querySelectorAll(".slider-label-3");

var addSelectorClickHandler = function(sliderSelector, sliders, selectedSlider) {
  sliderSelector.addEventListener("click", function () {    
    for (var i = 0; i < sliders.length; i++) {
      sliders[i].classList.add("visually-hidden");
    }
    selectedSlider.classList.remove("visually-hidden");
  })
}


for (var i = 0; i < promoFirstSliderSelectors.length; i++) {
  addSelectorClickHandler(promoFirstSliderSelectors[i], promoSliders, promoSliders[0]);
}

for (var i = 0; i < promoSecondSliderSelectors.length; i++) {
  addSelectorClickHandler(promoSecondSliderSelectors[i], promoSliders, promoSliders[1]);
}

for (var i = 0; i < promoThirdSliderSelectors.length; i++) {
  addSelectorClickHandler(promoThirdSliderSelectors[i], promoSliders, promoSliders[2]);
}

linkContactUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContactUs.classList.add("modal-show");
  contactName.focus();
});

closeContactUsPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContactUs.classList.remove("modal-show");
  popupContactUs.classList.remove("wrong-input");  
});

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMapPopup.addEventListener("click", function(evt) {
  popupMap.classList.remove("modal-show");
})

contactForm.addEventListener("submit", function(evt) {
  if (!contactName.value || !contactEmail.value  || !contactText.value) {
    evt.preventDefault();
    popupContactUs.classList.remove("wrong-input");
    popupContactUs.classList.add("wrong-input");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popupContactUs.classList.contains("modal-show") || popupMap.classList.contains("modal-show")) {
      popupContactUs.classList.remove("modal-show");
      popupMap.classList.remove("modal-show");
      popupContactUs.classList.remove("wrong-input");  
    }
  }
});