$(document).ready(function () {
  // Hotel-slider
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    // effect 
    effect: "fade"
  });

  var hotelSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });


  // Yandex Map Javascript API
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    console.log('Клик по кнопе меню');
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });


  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).on('keydown', function (event) {
    if (event.code == 'Escape')
      closeModal(event);
  });

  // validation forms
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter your name.",
          minlength: "The name must be at least 5 characters.",
        },
        email: {
          required: "We need your email address to contact you.",
          email: "Please enter a valid email adress.",
        },
        phone: {
          required: "Please enter a phone number.",
        },
        text: {
          required: "Please enter a valid email adress"
        }
      },
    });
  });


});