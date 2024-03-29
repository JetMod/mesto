export default class UserInfo {
  constructor({ nameSelector, workSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._workElement = document.querySelector(workSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  //возвращает объект с данными пользователя.
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._workElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  //принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._workElement.textContent = data.about;
    this._avatarElement.src = data.avatar;
  }
}
