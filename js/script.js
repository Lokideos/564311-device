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