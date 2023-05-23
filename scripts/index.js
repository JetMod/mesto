const popup = document.querySelector('.popup');
const buttonPopupOpen = document.querySelector('.profile__create');
const buttonPopupClose = document.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
const togglePopupState = (popupToToggle) =>
  popupToToggle.classList.toggle('popup_opened');

//open popup
function openPopup() {
  togglePopupState(popup);
  // получаем данные из инпута и записываем текст
  nameInput.value = profileName.textContent;
  jobInput.value = profileWork.textContent;
}

//
function handleFormSubmit(event) {
  // отменяем действие по умолчанию.
  event.preventDefault();
  // получаем данные из инпута и перез
  profileName.textContent = nameInput.value;
  profileWork.textContent = jobInput.value;
  togglePopupState(popup);
}

buttonPopupClose.addEventListener('click', () => togglePopupState(popup));
popupForm.addEventListener('submit', handleFormSubmit);
buttonPopupOpen.addEventListener('click', openPopup);
