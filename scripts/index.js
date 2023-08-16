//импорт обьектов
import { formConf } from "./FormValidator.js";
import { cardConf } from "./Card.js";
import { initialCards } from "./initialCards.js";

// импорт классов
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const cardsContainer = document.querySelector(".cards");
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
const profileCreateButton = document.querySelector(".profile__create");
const profileAddButton = document.querySelector(".profile__add");
const profilePopup = document.querySelector(".popup_edit-profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const cardPopup = document.querySelector(".popup_add");
const newCardForm = cardPopup.querySelector(".popup__form");
const newCardTitle = cardPopup.querySelector(".popup__input_value_title");
const newCardLink = cardPopup.querySelector(".popup__input_value_link");
const imagePopup = document.querySelector(".popup_value_image");
const imagePopupTitle = imagePopup.querySelector(".popup__image-text");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const profileForm = new FormValidator(formConf, profilePopupForm);
const cardForm = new FormValidator(formConf, newCardForm);
const popupList = Array.from(document.querySelectorAll(".popup"));

// open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
}

//close popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

// open popup redact
function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputWork.value = profileWork.textContent;
  profileForm.resetPopup();
  openPopup(profilePopup);
}

// open popup newaddcart
function openCardPopup() {
  newCardForm.reset();
  cardForm.resetPopup();
  openPopup(cardPopup);
}

// open image popup
function openImagePopup(title, link) {
  imagePopupTitle.textContent = title;
  imagePopupImage.setAttribute("src", link);
  imagePopupImage.setAttribute("alt", title);
  openPopup(imagePopup);
}

//закрытия попапа при нажатии на esc
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}

//для заполнения профиля
function submitProfilePopup(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileWork.textContent = profileInputWork.value;
  closePopup(profilePopup);
}

// для создания карточки
function submitCardPopup(event) {
  event.preventDefault();
  renderedCard(cardsContainer, newCardTitle.value, newCardLink.value);
  closePopup(cardPopup);
}

// создание карточки
function createCard(title, link) {
  const card = new Card(cardConf, title, link, openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderedCard(containerElement, title, link) {
  containerElement.prepend(createCard(title, link));
}

function setCloseEventListenersPopups() {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener("mousedown", (event) => {
      if (
        event.target === event.currentTarget ||
        event.target.classList.contains("popup__close")
      ) {
        closePopup(popupElement);
      }
    });
  });
}

function setEventListenersPopup() {
  profileCreateButton.addEventListener("click", openProfilePopup);
  // console.log(openProfilePopup);
  profileAddButton.addEventListener("click", openCardPopup);
  setCloseEventListenersPopups();
  profilePopupForm.addEventListener("submit", submitProfilePopup);
  newCardForm.addEventListener("submit", submitCardPopup);
}
// начальн карточки
initialCards.forEach(function (card) {
  renderedCard(cardsContainer, card.name, card.link);
});

setEventListenersPopup();

profileForm.enableValidation();
cardForm.enableValidation();
