import $ from 'jquery';

class GoTop {
   constructor() {
      this.btn = $('#toTop');
      this.window = $(window);
      this.events()
   }

   events() {
      this.window.scroll(this.showBtn.bind(this));
      this.btn.click(this.goToTop)
   }

   goToTop() {
      $('html, body').animate({scrollTop:0}, '300');
   }

   showBtn() {
      if(this.window.scrollTop() > 300) {
         this.btn.addClass('show');
      } else{
         this.btn.removeClass('show');
      }
   }
}

export default GoTop;

