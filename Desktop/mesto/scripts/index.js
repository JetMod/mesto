const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
const profileCreateButton = document.querySelector(".profile__create");
const profileAddButton = document.querySelector(".profile__add");
const profilePopup = document.querySelector(".popup_edit-profile");
const profilePopupForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const profilePopupCloseButton = profilePopup.querySelector(".popup__close");
const profilePopupSubmitButton = profilePopupForm.querySelector(".popup__save");
const cardTemplate = document.querySelector("#card").content;
const cardPopup = document.querySelector(".popup_add");
const newCardForm = cardPopup.querySelector(".popup__form");
const newCardTitle = cardPopup.querySelector(".popup__input_value_title");
const newCardLink = cardPopup.querySelector(".popup__input_value_link");
const cardPopupCloseButton = cardPopup.querySelector(".popup__close");
const cardPopupSubmitButton = newCardForm.querySelector(".popup__save");
const cardsContainer = document.querySelector(".cards");
const imagePopup = document.querySelector(".popup_value_image");
const imagePopupTitle = imagePopup.querySelector(".popup__image-tex");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputWork.value = profileWork.textContent;
  resetPopup(
    config,
    [profileInputName, profileInputWork],
    profilePopupSubmitButton
  );
  openPopup(profilePopup);
}

function openCardPopup() {
  newCardTitle.value = "";
  newCardLink.value = "";
  resetPopup(config, [newCardTitle, newCardLink], cardPopupSubmitButton);
  openPopup(cardPopup);
}

function openImagePopup(title, link) {
  imagePopupTitle.textContent = title;
  imagePopupImage.setAttribute("src", link);
  imagePopupImage.setAttribute("alt", title);
  openPopup(imagePopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
}

function closeCardPopup() {
  closePopup(cardPopup);
}

function closeImagePopup() {
  closePopup(imagePopup);
}

function closePopupByOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popupElement = document.querySelector(".popup_opened");
    closePopup(popupElement);
  }
}

function submitProfilePopup(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileWork.textContent = profileInputWork.value;
  closePopup(profilePopup);
}

function submitCardPopup(event) {
  event.preventDefault();
  renderCard(newCardTitle.value, newCardLink.value);
  closePopup(cardPopup);
}

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImg = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like");
  const cardDeleteBtn = cardElement.querySelector(".card__delete");

  cardTitle.textContent = name;
  cardImg.setAttribute("src", link);
  cardImg.setAttribute("alt", name);

  cardLikeBtn.addEventListener("click", function (event) {
    event.target.classList.toggle("cards__like_active");
  });

  cardDeleteBtn.addEventListener("click", function (event) {
    event.target.closest(".card").remove();
  });

  cardImg.addEventListener("click", function () {
    openImagePopup(name, link);
  });

  return cardElement;
}

function renderCard(name, link) {
  cardsContainer.prepend(createCard(name, link));
}

function setEventListenersOnPopups() {
  profileCreateButton.addEventListener("click", openProfilePopup);
  profileAddButton.addEventListener("click", openCardPopup);

  profilePopupCloseButton.addEventListener("click", closeProfilePopup);
  cardPopupCloseButton.addEventListener("click", closeCardPopup);
  imagePopupCloseButton.addEventListener("click", closeImagePopup);

  profilePopupForm.addEventListener("submit", submitProfilePopup);
  newCardForm.addEventListener("submit", submitCardPopup);

  profilePopup.addEventListener("click", closePopupByOverlay);
  cardPopup.addEventListener("click", closePopupByOverlay);
  imagePopup.addEventListener("click", closePopupByOverlay);

  profilePopup.addEventListener("keydown", closePopupByEsc);
  cardPopup.addEventListener("keydown", closePopupByEsc);
  imagePopup.addEventListener("keydown", closePopupByEsc);
}

initialCards.forEach(function (card) {
  renderCard(card.name, card.link);
});

setEventListenersOnPopups();
