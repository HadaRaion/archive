import $ from 'jquery';

class CounterUp {
  constructor() {

    this.event();
  }

  event() {
   $('.num').counterUp();
   };

}

export default CounterUp;



