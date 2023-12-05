import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Navigate } from '../../navigate';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _navigate: Navigate) {}

  scroll(el: string) {
    this._navigate.scroll(el);
  }
  clickOpen() {
    this.showNav.next(true);
  }
}
