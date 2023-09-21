$(document).ready(function() {
  'use strict';

  $(window)
    .on('scroll', function() {
      updateHeader(this);
    })
    .scroll();

  updateHeader($(window));

  function updateHeader(elem) {
    if ($(elem).scrollTop() > 20) {
      $('.header').addClass('on-scroll');
    } else {
      $('.header').removeClass('on-scroll');
    }
  }

  $('.js-header-burger').on('click', function() {
    $(this)
      .children('.header-menu')
      .toggleClass('open');
    $(document.body).toggleClass('nav-open');
  });

  // Customers and Projects
  var owl = $('.js-autoplay');
  owl.owlCarousel({
    items: 1,

    loop: true,
    margin: 15,
    dots: true,
    nav: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 750,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      1200: {
        items: 5
      },
      1040: {
        items: 3
      },
      480: {
        items: 2,
        dots: false
      },
      200: {
        items: 1,
        dots: false
      }
    }
  });

  // Contact from
  $('.input-field').focus(function() {
    $(this)
      .parent()
      .addClass('is-active is-completed');
  });

  $('.input-field').focusout(function() {
    if ($(this).val() === '')
      $(this)
        .parent()
        .removeClass('is-completed');
    $(this)
      .parent()
      .removeClass('is-active');
  });

  // Animate anchor scrolling
  var $root = $('html, body');

  $('a[href^="#"]').click(function() {
    $root.animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top
      },
      500
    );

    return false;
  });
});
