const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
const profileCreateButton = document.querySelector(".profile__create");
const profileEditPopup = document.querySelector(".popup_edit-profile");
const profileEditForm = profileEditPopup.querySelector(".popup__form");
const profileInputName = profileEditPopup.querySelector(
  ".popup__input_value_name"
);
const profileInputWork = profileEditPopup.querySelector(
  ".popup__input_value_job"
);
const buttonPopupClose = document.querySelectorAll(".popup__close");
const newAddCardButton = document.querySelector(".profile__add");
const newAddCardPopup = document.querySelector(".popup_add");
const newCardForm = newAddCardPopup.querySelector(".popup__form");
const newCardTitle = newAddCardPopup.querySelector(".popup__input_value_title");
const newCardLink = newAddCardPopup.querySelector(".popup__input_value_link");
const imagePopup = document.querySelector(".popup_value_image");
const imagePopupSize = imagePopup.querySelector(".popup__image");
const imagePopupText = imagePopup.querySelector(".popup__image-text");

function openPopup(popupName) {
  document.querySelector(popupName).classList.add("popup_opened");
}

function closePopup(event) {
  const popup = event.target.closest(".popup");
  popup.classList.remove("popup_opened");
}

buttonPopupClose.forEach((button) =>
  button.addEventListener("click", closePopup)
);

function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileWork.textContent = profileInputWork.value;
  closePopup(event);
}

profileCreateButton.addEventListener("click", function () {
  profileInputName.value = profileName.textContent;
  profileInputWork.value = profileWork.textContent;
  openPopup(".popup_edit-profile");
});
profileEditForm.addEventListener("submit", saveProfile);

function saveCardNew(event) {
  event.preventDefault();

  const card = {};
  card.name = newCardTitle.value;
  card.link = newCardLink.value;
  drawCards(card);

  closePopup(event);
  newCardTitle.value = "";
  newCardLink.value = "";
}

newAddCardButton.addEventListener("click", function () {
  openPopup(".popup_add");
});
newCardForm.addEventListener("submit", saveCardNew);

// попап увеличение
function showPopupImage(event) {
  imagePopupSize.src = event.target.src;
  imagePopupSize.alt = event.target.alt;
  imagePopupText.textContent = event.target
    .closest(".card")
    .querySelector(".card__title").textContent;

  openPopup(".popup_value_image");
}

function drawCards(...cards) {
  const cardsElement = document.querySelector(".cards");
  const cardTemplate = document.querySelector("#card").content;

  cards.forEach((card) => {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = card.link;
    cardElement.querySelector(".card__image").alt = card.name;
    cardElement.querySelector(".card__title").textContent = card.name;

    // обработчики
    cardElement
      .querySelector(".card__image")
      .addEventListener("click", showPopupImage);

    cardElement
      .querySelector(".card__delete")
      .addEventListener("click", deleteCard);

    cardElement
      .querySelector(".card__like")
      .addEventListener("click", likeCard);

    cardsElement.prepend(cardElement);
  });
}

//лайк при клике
function likeCard(event) {
  event.target.closest(".card__like").classList.toggle("card__like_active");
}

// удаление карточки
function deleteCard(event) {
  event.target.closest(".card").remove();
}
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// карточки при загузке
drawCards(...initialCards);
