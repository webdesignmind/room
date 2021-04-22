const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".slider-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  effect: "slide",
  keyboard: {
    enabled: true,
  },
});
