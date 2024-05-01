import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });
  onSubmit():void {
    console.log(this.contactForm.value);
  }
}
