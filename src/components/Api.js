//запрос к серверу ( url и заголовок)
export default class Api {
  constructor({ url, name }) {
    this._url = url;
    this._name = name;
  }

  //получает данные текущего пользователя
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._name,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // устанавливает новые имя и профессию текущего пользователя
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._name,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // устанавливает новый аватар пользователя
  saveAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._name,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: `${data.avatar}`,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // получает исходные карточки для отрисовки
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._name,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // добавляет новую карточку
  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._name,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${data.title}`,
        link: `${data.link}`,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  //удаляет карточку с сервера
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._name,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // ставит лайк на карточку
  setLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._name,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // удаляет лайк с карточки
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._name,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка 1: ${res.status}`);
  }
}
