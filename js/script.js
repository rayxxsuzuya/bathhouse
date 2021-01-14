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