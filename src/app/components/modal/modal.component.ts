import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  html: HTMLElement = document.getElementsByTagName('html')[0];
  @Output() showModal = new EventEmitter<boolean>();

  closeModal(event: boolean) {
    this.showModal.emit(event);
    this.html.style.overflowY = 'visible';
  }
}
