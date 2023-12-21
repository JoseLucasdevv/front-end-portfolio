import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  clickOpen(event: boolean) {
    this.showNav.next(event);
  }
}
