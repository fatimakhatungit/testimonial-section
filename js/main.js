(function($){

	jQuery(document).ready(function(){

     // slider-active
     $('.slider-active').slick({
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
  });

  $('.testimonial-active').slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    // service - active
$('.testimonial-active').slick({
  autoplay: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

		

	});

}(jQuery));