import { Component } from '@angular/core';
import { DataComponent } from '../../components/data/data.component';
import { SkilsComponent } from '../../components/skils/skils.component';
import { ContactComponent } from '../../components/contact/contact.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataComponent,SkilsComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  goToLinkedinProfile():void{
    window.open('https://www.linkedin.com/in/emanuel-fermin', '_blank');
  }
  goToWhatsappChat():void{
    window.open('https://wa.me/+51993815686', '_blank');
  }
}
