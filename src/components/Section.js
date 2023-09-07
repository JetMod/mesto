export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  // отвечает за отрисовку всех элементов
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItemToTheEnd(element) {
    this._containerElement.prepend(element);
  }

  // добавляет DOM-элемент в начало контейнера
  addItemToTheBeginning(element) {
    this._containerElement.append(element);
  }
}
