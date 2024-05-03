import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() showModal!: boolean;
  @Input() title!: string;
  @Input() message!: string;
  openModal(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}