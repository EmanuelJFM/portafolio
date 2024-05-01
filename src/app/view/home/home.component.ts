import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  contactForm = new FormGroup({
    nombre : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  downloadPdf() {
    window.open('./assets/pdf/cv.pdf', '_blank');
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }
}
