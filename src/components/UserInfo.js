export default class UserInfo {
  constructor({ nameSelector, workSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._workElement = document.querySelector(workSelector);
  }

  //возвращает объект с данными пользователя.
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      work: this._workElement.textContent,
    };
  }

  //ринимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(name, work) {
    this._nameElement.textContent = name;
    this._workElement.textContent = work;
  }
}
