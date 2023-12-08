import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollY]',
})
export class ScrollYDirective {
  constructor() {}
  @HostBinding('class.remove') toggle: boolean = false;

  @HostListener('window:scroll')
  onScroll() {
    const footer = document.getElementById('bottom-footer');
    if (!footer) return;

    const footerY = footer.offsetTop;

    const scrollBottomY = window.scrollY + window.innerHeight;
    if (scrollBottomY > footerY) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}
