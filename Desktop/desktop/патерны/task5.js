function createProtectedFile(password) {
  let file = {
    content: null,

    setPassword: function (newPassword) {
      password = newPassword;
    },

    getContent: function (enteredPassword) {
      if (enteredPassword === password) {
        return file.content;
      } else {
        throw new Error("Неверный пароль!");
      }
    },

    setContent: function (enteredPassword, newContent) {
      if (enteredPassword === password) {
        file.content = newContent;
      } else {
        throw new Error("Неверный пароль!");
      }
    },
  };

  let proxy = new Proxy(file, {
    get: function (target, property) {
      if (property === "content") {
        throw new Error("Доступ к содержимому файла запрещен!");
      } else {
        return target[property];
      }
    },

    set: function (target, property, value) {
      if (property === "content") {
        throw new Error("Запрещено изменять содержимое файла!");
      } else {
        target[property] = value;
        return true;
      }
    },

    apply: function (target, thisArg, argumentsList) {
      throw new Error("Вызов файла как функции запрещен!");
    },
  });

  return proxy;
}

let myFile = createProtectedFile("mypassword");

myFile.setContent("mypassword", "Секретная информация");
console.log(myFile.getContent("mypassword"));

try {
  console.log(myFile.content);
} catch (error) {
  console.log(error.message);
}

try {
  myFile.content = "Новое содержимое";
} catch (error) {
  console.log(error.message);
}
