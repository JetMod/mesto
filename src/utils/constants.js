const profileCreateButton = document.querySelector(".profile__create");
const profileAddButton = document.querySelector(".profile__add");
const profilePopup = document.querySelector(".popup_edit-profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const cardPopup = document.querySelector(".popup_add");
const newCardForm = cardPopup.querySelector(".popup__form");

const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// для валидации форм
const formConf = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveSubmitButtonClass: "popup__save_disabled",
  hoverClass: "link",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

// для создания карточки
const cardConf = {
  templateSelector: "#card",
  cardSelector: ".card",
  imageSelector: ".card__image",
  deleteButtonSelector: ".card__delete",
  titleSelector: ".card__title",
  likeButtonSelector: ".card__like",
  activeLikeClass: "card__like_active",
};

export {
  initialCards,
  formConf,
  cardConf,
  profileCreateButton,
  profileAddButton,
  profilePopupForm,
  profileInputName,
  profileInputWork,
  newCardForm,
};
