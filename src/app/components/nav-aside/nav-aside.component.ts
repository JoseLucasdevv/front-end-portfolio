import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Navigate } from '../../navigate';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-nav-aside',
  templateUrl: './nav-aside.component.html',
  styleUrls: ['./nav-aside.component.scss'],
})
export class NavAsideComponent implements OnInit, OnDestroy {
  @Input() flag!: BehaviorSubject<boolean>;
  aside!: HTMLElement | null;
  html: HTMLElement = document.getElementsByTagName('html')[0];
  constructor(
    private _navigate: Navigate,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.html.style.overflowY = 'hidden';

    this.aside = document.getElementById('nav');

    const asideWidth = this.aside?.offsetWidth;
    if (!asideWidth) return;
    const innerWidth = window.innerWidth;
    const onClick = (e: MouseEvent) => {
      if (e.clientX < innerWidth - asideWidth) {
        this.flag.next(false);
        document.removeEventListener('click', onClick);
      }
    };

    document.addEventListener('click', onClick);
  }
  ngOnDestroy(): void {
    this.html.style.overflowY = 'visible';
  }

  scroll(el: string) {
    this._navigate.scroll(el);
    this.flag.next(false);
  }
  switchLanguage(language: string) {
    this._translate.use(language);
    this.flag.next(false);
  }
}
