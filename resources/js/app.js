// FOR THE STICKY NAVIGATION
$(document).ready(function () {
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    offset: '60px;'
  });

  // SCROLL ON BUTTONS
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });

  // NAVIGATION SCROLL
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // ANIMATIONS ON SCROLL
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
  }, {
    offset: '50%'
  });

  //  MOBILE NAVIGATION
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon close-outline')

    nav.slideToggle(200);
    if (icon.hasClass('reorder-three-outline')) {
      icon.addElement('close-outline');
      icon.removeClass('reorder-three-outline');
    } else {
      icon.addClass('reorder-three-outline');
      icon.removeClass('close-outline');
    }
  });
});