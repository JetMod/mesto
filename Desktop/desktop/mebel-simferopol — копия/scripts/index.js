document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navbar__wrap").classList.toggle("open");
});

// слайдр
$(".logo-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplayspeed: 2000,
  infiniite: true,
});
