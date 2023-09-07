export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // закрыть попап на Esc
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  // открыть попап
  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  // закрыть попап
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handlePopupMouseDown(event) {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close")
    ) {
      this.close();
    }
  }

  // устанавливает слушатели событий
  setEventListeners() {
    this._popupElement.addEventListener(
      "mousedown",
      this._handlePopupMouseDown.bind(this)
    );
  }
}
