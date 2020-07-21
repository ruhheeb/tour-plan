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

// Yandex Map
ymaps.ready(init);


function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.833065, 37.484954],
      zoom: 18
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter());

  myMap.geoObjects.add(myPlacemark);

  myPlacemark.events
    .add('mouseenter', function (e) {
      // Ссылку на объект, вызвавший событие,
      // можно получить из поля 'target'.
      e.get('target').options.set('preset', 'islands#greenIcon');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.unset('preset');
    });
}