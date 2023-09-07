const profileAvatarEdit = document.querySelector(".profile__avatar-create");
const profileEditButton = document.querySelector(".profile__create");
const profileAddButton = document.querySelector(".profile__add");
const avatarPopup = document.querySelector(".popup_type_avatar");
const profilePopup = document.querySelector(".popup_edit-profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_type_name");
const profileInputWork = profilePopup.querySelector(".popup__input_type_work");
const cardPopup = document.querySelector(".popup_add-card");
const cardPopupForm = cardPopup.querySelector(".popup__form");

// для валидации форм
const formConf = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveSubmitButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  hoverClass: "link",
};

// для создания карточки
const cardConf = {
  templateSelector: "#card",
  cardSelector: ".cards__card",
  imageSelector: ".cards__img",
  basketButtonSelector: ".cards__basket",
  titleSelector: ".cards__title",
  likeButtonSelector: ".cards__like-icon",
  likeCounterSelector: ".cards__like-counter",
  activeLikeButtonClass: "cards__like-icon_active",
};

export {
  formConf,
  cardConf,
  avatarPopup,
  profilePopupForm,
  cardPopupForm,
  profileAvatarEdit,
  profileEditButton,
  profileAddButton,
  profileInputName,
  profileInputWork,
};
