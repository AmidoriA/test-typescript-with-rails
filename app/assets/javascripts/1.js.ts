/// <reference path="base.js.ts"/>

class Page1 extends Printer {
  
  constructor() {
    this.outputClass = '1-container';
    super();
  }

  runner(): void {
    alert('Page 1 alert');
  }
}

var page1 = new Page1();