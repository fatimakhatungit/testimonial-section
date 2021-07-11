(function($){

	jQuery(document).ready(function(){


                 // data - background
        $("[data-bg]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")")
        });

        // brand-active
    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay:true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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