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
    console.log($(this).attr("data-href"));
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
          required: "Please enter your email"
        },
      },
    });
  });

  // mask for number
  $(document).ready(function () {
    $('.phone_us').mask('7 (999) 999-99-99');
  });

  // initialize AOS animate
  AOS.init();


  $(function () {
    var hotelMap = $('#map');
    var hotelMapTop = hotelMap.offset().top;
    $(window).bind('scroll', function () {
      var windowTop = $(this).scrollTop();
      if (windowTop > hotelMapTop) {
        $('#map').html('<iframe class="map"src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8592242905584!2d43.32248629739441!3d38.44472050737955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4012771c021d3025%3A0x3ca87d16df84400c!2sDoubleTree%20by%20Hilton%20Hotel%20Van!5e0!3m2!1sen!2s!4v1596561857194!5m2!1sen!2s"height = "213" allowfullscreen = "" aria - hidden="false" tabindex = "0" ></iframe >')
        $(window).unbind('scroll');
      }
    });
  });

});