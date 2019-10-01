import $ from 'jquery';

class DocToggles {
   constructor() {
      this.events()
   }

   events() {
      $('#toggleBtnOfSource').click(function() {
         
         $('.source-slider').slideToggle('5000', function(){
         
            if ($('.source-slider').is(':visible')) {
               $('#toggleBtnOfSource').addClass("btn-small-blue")
               $('#toggleBtnOfSource').removeClass("btn-small-gray")
            } else {
               $('#toggleBtnOfSource').addClass("btn-small-gray")
               $('#toggleBtnOfSource').removeClass("btn-small-blue")
            }

         });
         $('.source-slider').get(0).slick.setPosition(); 
      })
   }
}

export default DocToggles;
