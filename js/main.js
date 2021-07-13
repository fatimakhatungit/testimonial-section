(function($){

	jQuery(document).ready(function(){

     // slider-active
  //    $('.slider-active').slick({
  //     autoplay: true,
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     speed: 400,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  // });

  // $('.slider-active').slick({
  //   autoplay: true,
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 300,
  //   prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  //   nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });



  // $('.slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.testimonial-active').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });


    // service - active
// $('.testimonial-active').slick({
//   autoplay: true,
//   dots: false,
//   arrows: true,
//   infinite: true,
//   speed: 300,
//   prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
//   nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

		

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
	infinite: true,
	centerPadding: '0px'
});
		


	});

}(jQuery));