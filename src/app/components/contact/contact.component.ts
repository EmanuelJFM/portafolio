import { Component, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SendInformationService } from '../../services/send-information.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,ModalComponent],
  providers:[SendInformationService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  showModal = false;
  modalTitle = '';
  modalMessage = '';
  sendInformationService = inject(SendInformationService);
  contactForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });
 
  sendInformation(): void {
    if (this.contactForm.valid) {
      this.sendInformationService.sendContactForm(this.contactForm.value).subscribe({
        next: () => {
          this.modalComponent.openModal('Mensaje enviado', 'Tu mensaje se ha enviado con éxito');
        },
        error: () => {
          this.modalComponent.openModal('Error', 'Ocurrió un error al enviar la información, por favor, inténtalo de nuevo.');
        }
      });
    }
  }
}
