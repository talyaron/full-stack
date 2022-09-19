// based on Cameron J. Leverett, https://javascript.plainenglish.io/s-o-l-d-with-javascript-examples-e8a071345c8a


class Bird {
    layEgg () {}
  }
  
  class FlyingBird {
    fly () {}
  }
  
  class SwimmingBird extends Bird {
    swim () {}
  }
  
  class Eagle extends FlyingBird {}
  
  class Penguin extends SwimmingBird {}
  
  const penguin = new Penguin();

