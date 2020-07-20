var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // effect 
  effect: "fade"
});