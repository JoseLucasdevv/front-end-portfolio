import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollY]',
})
export class ScrollYDirective {
  constructor() {}
  @HostBinding('class.remove') toggle: boolean = false;
  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 1800) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}
