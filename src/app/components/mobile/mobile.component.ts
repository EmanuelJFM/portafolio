import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {
  items = [
    {
      title: 'Proyecto App Namu',
      description: 'Proyecto realizado para la gestion de reservas del restaurante',
      repoLink: 'https://github.com/EmanuelJFM/app-namu',
      img: 'assets/img/img-4.webp'
    },
    {
      title: 'Proyecto Peliculas',
      description: 'Proyecto realizado para conslta nformacion acerca de pelculas en estreno',
      repoLink: 'https://github.com/EmanuelJFM/AppPeliculas',
      img: 'assets/img/img-5.webp'
    }
  ];
}
