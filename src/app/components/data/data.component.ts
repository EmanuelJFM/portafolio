import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  downloadPdf():void {
    window.open('./assets/pdf/cv.pdf', '_blank');
  }

}
