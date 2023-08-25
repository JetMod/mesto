export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._containerElement.prepend(element);
  }

  // отвечает за отрисовку всех элементов
  renderElements() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
