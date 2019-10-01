import $ from 'jquery';

class Test {
   constructor() {
      this.cclSelect = $('body');
      this.events()
   }

   events() {
      this.cclSelect.click(this.test);
   }

   test() {
      console.log("working")
   }
}
export default Test;

