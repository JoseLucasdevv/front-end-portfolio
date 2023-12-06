import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Navigate } from '../../navigate';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-nav-aside',
  templateUrl: './nav-aside.component.html',
  styleUrls: ['./nav-aside.component.scss'],
})
export class NavAsideComponent implements OnInit, OnDestroy {
  @Input() flag!: BehaviorSubject<boolean>;
  html: HTMLElement = document.getElementsByTagName('html')[0];
  constructor(private _navigate: Navigate) {}

  ngOnInit(): void {
    this.html.style.overflowY = 'hidden';
  }
  ngOnDestroy(): void {
    this.html.style.overflowY = 'visible';
  }

  scroll(el: string) {
    this._navigate.scroll(el);
    this.flag.next(false);
  }
}
