function headerMenu() {
  let menu = document.getElementById("menu__header");

  if (menu.className === "header__menu") {
    menu.className += " responsive";
  } else {
    menu.className = "header__menu";
  }
}
