import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apis-restfull',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apis-restfull.component.html',
  styleUrl: './apis-restfull.component.scss'
})
export class ApisRestfullComponent {
  apis = [
    {
      name: 'Api usada en la app namu',
      iconClass: 'bx bxl-nodejs',
      repoLink: 'https://github.com/EmanuelJFM/Express-mensajeria'
    },
    {
      name: 'Api usada en el proyecto portafolio',
      iconClass: 'bx bxl-nodejs',
      repoLink: 'https://github.com/EmanuelJFM/api-portafolio'
    }
  ];
}
