const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
const profileCreateButton = document.querySelector(".profile__create");
const profilePopup = document.querySelector(".popup_edit-profile");
const profileEditForm = profilePopup.querySelector(".popup__form");
const profileInputName = profilePopup.querySelector(".popup__input_value_name");
const profileInputWork = profilePopup.querySelector(".popup__input_value_job");
const popupEditCloseButton = profilePopup.querySelector(".popup__close");

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
