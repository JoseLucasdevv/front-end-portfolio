import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  html: HTMLElement = document.getElementsByTagName('html')[0];

  closeModal() {
    const overlay: HTMLElement | null = document.querySelector('.overlay');
    if (!overlay) return;

    overlay.style.display = 'none';
    this.html.style.overflowY = 'visible';
  }
}
