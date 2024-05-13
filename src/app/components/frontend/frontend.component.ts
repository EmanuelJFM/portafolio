import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.scss'
})
export class FrontendComponent {
  projects = [
    {
      title: 'Restaurant Admin',
      link: 'https://github.com/theonlybenjamin/restaurants-admin',
      img: '../assets/img/img-2.webp'
    },
    {
      title: 'Portafolio',
      link: 'https://github.com/EmanuelJFM/portafolio',
      img: '../assets/img/img-1.webp'
    },
    {
      title: 'Crónicas Peruanas',
      link: 'https://github.com/EmanuelJFM/PaginaNoticias',
      img: '../assets/img/img-2.webp'
    }
  ];
}
