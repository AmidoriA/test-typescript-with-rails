/// <reference path="base.js.ts"/>

class Page2 extends Printer {
  
  constructor() {
    this.outputClass = '2-container';
    super();
  }

  runner(): void {
    $("." + this.outputClass + " .output").html('Hello page 2');
  }
}

var page2 = new Page2();