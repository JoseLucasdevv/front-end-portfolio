import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderBorder]',
})
export class HeaderBorderDirective {
  constructor() {}
  @HostBinding('class.borderHeader') toggle: boolean = false;

  @HostListener('window:scroll')
  onScroll() {
    if (scrollY > 10) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}
