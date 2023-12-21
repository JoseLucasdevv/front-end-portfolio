import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Navigate {
  constructor(private _router: Router) {}
  scroll(el: string): void {
    if (document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this._router
        .navigate(['/'])
        .then(() =>
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
        );
    }
  }
}
