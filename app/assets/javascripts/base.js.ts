/// <reference path="jquery.d.js.ts"/>

class Printer {
  outputClass: string;
  constructor() {
    this.binds();
  }

  binds(): void {
    var that = this;
    $("." + this.outputClass + " [data-action=run]").click(function() {
      that.runner();
    });
  }

  runner(): void {
    console.log('log from base');
  }
}