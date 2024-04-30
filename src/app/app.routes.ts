import { Routes } from '@angular/router';
import { LayoutComponent } from './view/layout/layout.component';
import { HomeComponent } from './view/home/home.component';
import { ProjectsComponent } from './view/projects/projects.component';

export const routes: Routes = [{
    path:'',
    component: LayoutComponent,
    children:[
        {
            path:'',
            component:HomeComponent
        },
        {
            path:'proyectos',
            component:ProjectsComponent
        }
    ]
}];
