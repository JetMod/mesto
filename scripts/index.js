const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
const profileCreateButton = document.querySelector(".profile__create");
const profilePopup = document.querySelector(".popup_edit-profile");
const profileEditForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const popupEditCloseButton = profilePopup.querySelector(".popup__close");
const newAddCardButton = document.querySelector(".profile__add");
const cardPopup = document.querySelector(".popup_add");
const newCardForm = cardPopup.querySelector(".popup__form");
const newCardTitle = cardPopup.querySelector(".popup__input_value_title");
const newCardLink = cardPopup.querySelector(".popup__input_value_link");
const imagePopup = document.querySelector(".popup_value_image");
const imagePopupSize = imagePopup.querySelector(".popup__image");
const imagePopupText = imagePopup.querySelector(".popup__image-text");
const cardTemplate = document.querySelector("#card").content;
const cardsContainer = document.querySelector(".cards");
const cardAddCloseButton = cardPopup.querySelector(".popup__close");
const photoCloseButton = imagePopup.querySelector(".popup__close");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = profileInputName.value;
  profileWork.textContent = profileInputWork.value;
  closePopup(profilePopup);
}
function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputWork.value = profileWork.textContent;
  openPopup(profilePopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
}

profileCreateButton.addEventListener("click", openProfilePopup);
profileEditForm.addEventListener("submit", saveProfile);
popupEditCloseButton.addEventListener("click", closeProfilePopup);

function saveCardNew(event) {
  event.preventDefault();
  addCard(newCardTitle.value, newCardLink.value);

  closePopup(cardPopup);
  newCardTitle.value = "";
  newCardLink.value = "";
}

function createCard(nameValue, imgValue) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  // находим изображение
  const cardImg = cardElement.querySelector(".card__image");
  // находим название изображения
  const cardName = cardElement.querySelector(".card__title");
  // находим кнопку лайк карточки
  const cardLikeBtn = cardElement.querySelector(".card__like");
  // находим кнопку удаления карточки
  const cardDeleteBtn = cardElement.querySelector(".card__delete");

  cardName.textContent = nameValue;
  cardImg.src = imgValue;
  cardImg.alt = nameValue;
  // обработчик кнопки лайк
  cardLikeBtn.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like_active");
  });
  //обработчик кнопки Delete
  cardDeleteBtn.addEventListener("click", (event) => {
    event.target.closest(".card").remove();
  });
  //popup просмотра изображения
  cardImg.addEventListener("click", openImagePopup);

  // возвращаем готовую карточку
  return cardElement;
}

function addCard(name, link) {
  cardsContainer.prepend(createCard(name, link));
}
//открыть popup
function openImagePopup(event) {
  openPopup(imagePopup);

  eventTargetImg = event.target;
  imagePopupSize.src = eventTargetImg.src;
  imagePopupText.textContent = eventTargetImg.alt;
  imagePopupSize.alt = eventTargetImg.alt;
}

// функция загрузки карточек из массива
function renderInitialCards(cards) {
  cards.map((el) => {
    return addCard(el.name, el.link);
  });
}

// закрытие попапа добавления
function closeCardPopup() {
  closePopup(cardPopup);
}

function closeImagePopup() {
  closePopup(imagePopup);
}

cardAddCloseButton.addEventListener("click", closeCardPopup);
photoCloseButton.addEventListener("click", closeImagePopup);
newAddCardButton.addEventListener("click", () => openPopup(cardPopup));
newCardForm.addEventListener("submit", saveCardNew);

// карточки при загузке
renderInitialCards(initialCards);
