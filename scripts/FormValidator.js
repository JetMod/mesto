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

export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveSubmitButtonClass = config.inactiveSubmitButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._hoverClass = config.hoverClass;
    this._formElement = formElement;
  }

  // добавление класса с ошибкой
  _showInputError(inputElement, errorElement, errorMessage) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // удаление класса с ошибкой
  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  // добавление или удаление текста ошибки в зависимости от валидности поля ввода
  _checkInputValidity(inputElement, errorElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, errorElement);
    } else {
      this._showInputError(
        inputElement,
        errorElement,
        inputElement.validationMessage
      );
    }
  }

  // методы
  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    this._inputList.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );

      this._makeButtonInactive();

      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, errorElement);
        this._toggleButtonState();
      });
    });
  }

  // проверка валидность поля ввода
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // делает кнопку активной
  _makeButtonActive() {
    this._submitButtonElement.classList.remove(this._inactiveSubmitButtonClass);
    this._submitButtonElement.classList.add(this._hoverClass);
    this._submitButtonElement.removeAttribute("disabled");
  }

  // делает кнопку неактивной
  _makeButtonInactive() {
    this._submitButtonElement.classList.add(this._inactiveSubmitButtonClass);
    this._submitButtonElement.classList.remove(this._hoverClass);
    this._submitButtonElement.setAttribute("disabled", true);
  }

  // отключение/включение кнопки submit
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._makeButtonInactive();
    } else {
      this._makeButtonActive();
    }
  }

  resetPopup() {
    this._makeButtonInactive();
    this._inputList.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );

      this._hideInputError(inputElement, errorElement);
    });
  }

  // валидация формы
  enableValidation() {
    this._submitButtonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._setEventListeners();
  }
}
export { formConf };
