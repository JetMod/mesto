const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveSubmitButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
  hoverClass: "link",
};

const showInputError = (config, inputElement, errorElement, errorMessage) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (config, inputElement, errorElement) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
};

const checkInputValidity = (config, inputElement, errorElement) => {
  if (inputElement.validity.valid) {
    hideInputError(config, inputElement, errorElement);
  } else {
    showInputError(
      config,
      inputElement,
      errorElement,
      inputElement.validationMessage
    );
  }
};

const setEventListeners = (config, formElement, submitButtonElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    makeButtonInactive(config, submitButtonElement);

    inputElement.addEventListener("input", () => {
      checkInputValidity(config, inputElement, errorElement);
      toggleButtonState(config, inputList, submitButtonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const submitButtonElement = formElement.querySelector(
      config.submitButtonSelector
    );

    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(config, formElement, submitButtonElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const makeButtonActive = (config, submitButtonElement) => {
  submitButtonElement.classList.remove(config.inactiveSubmitButtonClass);
  submitButtonElement.classList.add(config.hoverClass);
  submitButtonElement.removeAttribute("disabled");
};

const makeButtonInactive = (config, submitButtonElement) => {
  submitButtonElement.classList.add(config.inactiveSubmitButtonClass);
  submitButtonElement.classList.remove(config.hoverClass);
  submitButtonElement.setAttribute("disabled", true);
};

const toggleButtonState = (config, inputList, submitButtonElement) => {
  if (hasInvalidInput(inputList)) {
    makeButtonInactive(config, submitButtonElement);
  } else {
    makeButtonActive(config, submitButtonElement);
  }
};

function resetPopup(config, inputList, submitButton) {
  makeButtonInactive(config, submitButton);
  inputList.forEach((input) => {
    hideInputError(config, input, input.nextElementSibling);
  });
}

enableValidation(config);
