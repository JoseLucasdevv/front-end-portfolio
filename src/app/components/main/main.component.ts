import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  showModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  clickOpen(event: boolean) {
    this.showNav.next(event);
  }
  showModalEvent(event: boolean) {
    this.showModal.next(event);
  }
}
