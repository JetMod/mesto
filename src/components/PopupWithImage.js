import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._titleElement = this._popupElement.querySelector(".popup__image-text");
    this._imageElement = this._popupElement.querySelector(".popup__image");
  }

  open(title, link) {
    this._titleElement.textContent = title;
    this._imageElement.setAttribute("src", link);
    this._imageElement.setAttribute("alt", title);

    super.open();
  }
}
