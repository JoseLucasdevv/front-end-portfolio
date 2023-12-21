import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Navigate } from '../../navigate';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() flagNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _navigate: Navigate,
    private _translate: TranslateService
  ) {}
  ngOnInit(): void {
    this._translate.setDefaultLang('en');
  }

  scroll(el: string) {
    this._navigate.scroll(el);
  }
  clickOpen(value: boolean) {
    this.flagNav.emit(value);
  }

  switchLanguage(language: string) {
    this._translate.use(language);
  }
}
