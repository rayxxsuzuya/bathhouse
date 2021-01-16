jQuery(function() {
  $('.reviews__slider').slick({
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true
        }
      },
    ]
  });
});


let takeButton = document.querySelector('.header__take-btn');
let callModal = document.querySelector('.call-modal');
let callClose = document.querySelector('.call-modal__close');

takeButton.addEventListener('click', function(e) {
  e.preventDefault();
  callModal.classList.add('active');
});

callClose.addEventListener('click', function() {
  callModal.classList.remove('active');
});

let menuBtn = document.querySelector('.header__menu');
let menuLine = document.querySelectorAll('.header__menu-line');
let mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  menuLine.forEach((item) => item.classList.toggle('active'));
  mobileNav.classList.toggle('active');
});