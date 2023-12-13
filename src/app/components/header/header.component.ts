import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Navigate } from '../../navigate';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
  clickOpen() {
    this.showNav.next(true);
  }

  switchLanguage(language: string) {
    this._translate.use(language);
  }
}
