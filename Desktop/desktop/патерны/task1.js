function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let celsius = 25;
let fahrenheit = 77;

console.log(
  celsius +
    " градусов Цельсия = " +
    celsiusToFahrenheit(celsius) +
    " градусов Фаренгейта"
);
console.log(
  fahrenheit +
    " градусов Фаренгейта = " +
    fahrenheitToCelsius(fahrenheit) +
    " градусов Цельсия"
);
