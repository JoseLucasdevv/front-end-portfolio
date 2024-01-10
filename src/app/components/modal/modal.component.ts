import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  imagesToLoad: string[] = [
    '../../../assets/Images/modal.png',
    '../../../assets/Images/cancel.png',
  ]; // Adicione suas imagens aqui
  loadedImages: string[] = [];
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  html: HTMLElement = document.getElementsByTagName('html')[0];

  closeModal() {
    this.showModal.emit(false);

    this.html.style.overflowY = 'visible';
  }

  ngOnInit() {
    if (this.showModal) {
      this.loadImages();
    }
  }

  loadImages() {
    this.imagesToLoad.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.loadedImages.push(image);
      };
    });
  }
}
