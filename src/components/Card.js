// для создания карточки
const cardConf = {
  templateSelector: "#card",
  cardSelector: ".card",
  imageSelector: ".card__image",
  deleteButtonSelector: ".card__delete",
  titleSelector: ".card__title",
  likeButtonSelector: ".card__like",
  activeLikeClass: "card__like_active",
};

export default class Card {
  constructor(data, title, image, openImagePopup) {
    this._title = title;
    this._image = image;
    this._templateSelector = data.templateSelector;
    this._imageSelector = data.imageSelector;
    this._cardSelector = data.cardSelector;
    this._deleteButtonSelector = data.deleteButtonSelector;
    this._titleSelector = data.titleSelector;
    this._likeButtonSelector = data.likeButtonSelector;
    this._activeLikeClass = data.activeLikeClass;
    this._handleImageClick = openImagePopup;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return this._cardElement;
  }

  // метод слушателя кнопки лайк
  _handleLikeClick() {
    this._likeButtonElement.classList.toggle(this._activeLikeClass);
  }

  // метод слушателя кнопки удалить
  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // устанавливает слушатели событий
  _setEventListeners() {
    this._likeButtonElement.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._deleteButtonElement.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._imageElement.addEventListener("click", () => {
      this._handleImageClick(this._title, this._image);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageTextElement = this._element.querySelector(this._titleSelector);
    this._imageElement = this._element.querySelector(this._imageSelector);
    this._likeButtonElement = this._element.querySelector(
      this._likeButtonSelector
    );
    this._deleteButtonElement = this._element.querySelector(
      this._deleteButtonSelector
    );

    this._imageTextElement.textContent = this._title;
    this._imageElement.setAttribute("src", this._image);
    this._imageElement.setAttribute("alt", this._title);
    this._setEventListeners();

    return this._element;
  }
}
export { cardConf };
