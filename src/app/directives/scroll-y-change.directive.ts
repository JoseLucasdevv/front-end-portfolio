import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
  selector: '[appScrollChangeY]',
})
export class ScrollChangeY {
  constructor() {}
  @HostBinding('class.remove') toggle: boolean = true;

  @HostListener('window:scroll')
  onScroll() {
    const footer = document.getElementById('bottom-footer');
    if (!footer) return;

    const footerY = footer.offsetTop;
    // Analise

    const scrollBottomY = window.scrollY + window.innerHeight;
    if (scrollBottomY > footerY) {
      this.toggle = false;
    } else {
      this.toggle = true;
    }
  }
}
