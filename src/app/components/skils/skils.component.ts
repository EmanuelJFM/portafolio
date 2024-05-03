import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISkills } from '../../interfaces/skills';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.scss'
})
export class SkilsComponent implements OnInit{
  skills!:ISkills[];
  ngOnInit(): void {
    this.skills = [
      { id:1, name: 'Angular', class: 'bx bxl-angular icon' },
      { id:2, name: 'Typescript', class: 'bx bxl-typescript icon' },
      { id:3, name: 'Visual Studio Code', class: 'bx bxl-visual-studio icon' },
      { id:4, name: 'Android', class: 'bx bxl-android icon' },
      { id:5, name: 'Firebase', class: 'bx bxl-firebase icon' },
      { id:6, name: 'NodeJs', class: 'bx bxl-nodejs icon' },
      { id:7, name: 'Scrum', class: 'bx bxs-conversation icon' },
      { id:8, name: 'SQL Server', class: 'bx bxs-data icon' },
      { id:9, name: 'Github', class: 'bx bxl-github icon' }
    ];
  }
}

