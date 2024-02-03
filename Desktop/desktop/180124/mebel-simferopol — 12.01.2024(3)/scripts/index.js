document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navbar__wrap").classList.toggle("open");
});
