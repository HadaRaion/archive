import $ from 'jquery';

class SnsShare {
   constructor() {
      this.snsShareBtn = $('.sns-share')
      this.events()
   }

   events() {
      this.snsShareBtn.click(this.showSnsList)
   }

   showSnsList() {
      $('ul:first',this).slideToggle(0);
   }
}

export default SnsShare;
