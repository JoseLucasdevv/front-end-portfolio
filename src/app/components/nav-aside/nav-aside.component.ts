import { Component, Input } from '@angular/core';
import { Navigate } from '../../navigate';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-nav-aside',
  templateUrl: './nav-aside.component.html',
  styleUrls: ['./nav-aside.component.scss'],
})
export class NavAsideComponent {
  constructor(private _navigate: Navigate) {}

  @Input() flag!: BehaviorSubject<boolean>;

  scroll(el: string) {
    this._navigate.scroll(el);
    this.flag.next(false);
  }
}
