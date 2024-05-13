import { Component } from '@angular/core';
import { FrontendComponent } from '../../components/frontend/frontend.component';
import { MobileComponent } from '../../components/mobile/mobile.component';
import { ApisRestfullComponent } from '../../components/apis-restfull/apis-restfull.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FrontendComponent,MobileComponent,ApisRestfullComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
