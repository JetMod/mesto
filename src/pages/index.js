import "./index.css";
//импорт обьектов
import { formConf } from "../components/FormValidator.js";
import { cardConf } from "../components/Card.js";
import { initialCards } from "../components/initialCards.js";

// импорт классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const profileCreateButton = document.querySelector(".profile__create");
const profileAddButton = document.querySelector(".profile__add");
const profilePopup = document.querySelector(".popup_edit-profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const cardPopup = document.querySelector(".popup_add");
const newCardForm = cardPopup.querySelector(".popup__form");
const validatorProfile = new FormValidator(formConf, profilePopupForm);
const validatorCard = new FormValidator(formConf, newCardForm);
const popupWithImage = new PopupWithImage(".popup_value_image");

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      initialCardList.addElements(createCard(item));
    },
  },
  ".cards"
);

const profileWithForm = new PopupWithForm(
  ".popup_edit-profile",
  ({ name, work }) => {
    userInfo.setUserInfo(name, work);
  },
  validatorProfile.resetPopup.bind(validatorProfile)
);

const cardWithForm = new PopupWithForm(
  ".popup_add",
  ({ title, link }) => {
    initialCardList.addElements(createCard({ title, link }));
  },
  validatorCard.resetPopup.bind(validatorCard)
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  workSelector: ".profile__work",
});

const createCard = ({ title, link }) => {
  const card = new Card(
    cardConf,
    title,
    link,
    popupWithImage.open.bind(popupWithImage)
  );
  const cardElement = card.generateCard();

  return cardElement;
};

validatorProfile.enableValidation();
validatorCard.enableValidation();
initialCardList.renderElements();

// установка слушателей
popupWithImage.setEventListeners();
profileWithForm.setEventListeners();
cardWithForm.setEventListeners();
profileCreateButton.addEventListener("click", () => {
  const { name, work } = userInfo.getUserInfo();
  profileInputName.value = name;
  profileInputWork.value = work;
  profileWithForm.open();
});
profileAddButton.addEventListener(
  "click",
  cardWithForm.open.bind(cardWithForm)
);
