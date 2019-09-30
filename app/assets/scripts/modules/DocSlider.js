import $ from 'jquery';

class DocSlider {
   constructor() {
      this.events();
   }

   events() {
      $('.doc-detail-slider').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         dots: false,
         focusOnSelect: true
       });

      $('.slider-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slider-nav'
       });
       
       $('.slider-nav').slick({
         slidesToShow: 7,
         slidesToScroll: 1,
         asNavFor: '.slider-for',
         dots: false,
         focusOnSelect: true
       });
   }
}

export default DocSlider;
