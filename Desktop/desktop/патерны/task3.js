function logDecorator(func) {
  return function () {
    console.log("Вызов функции: " + func.name);

    return func.apply(this, arguments);
  };
}

function logDecoratorPrimer(func) {
  return function () {
    console.log("Вызов функции: " + func.name);

    return func.apply(this, arguments);
  };
}

function greet(value) {
  console.log("Привет, " + value + "!");
}

function bay(value1) {
  console.log("Привет, " + value1 + "!");
}

let decoratedGreet = logDecorator(greet);
let decoratedGreetPrimer = logDecoratorPrimer(bay);

decoratedGreet("Мария");
