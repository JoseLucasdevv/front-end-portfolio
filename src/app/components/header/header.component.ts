import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _router: Router) {}
  scroll(el: string): void {
    if (document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this._router
        .navigate(['/home'])
        .then(() =>
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
        );
    }
  }
}
