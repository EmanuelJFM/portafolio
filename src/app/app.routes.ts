import { Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';



export const routes: Routes = [{
    path:'',
    component: LayoutComponent,
    children:[
        {
            path:'',
            component:HomeComponent,
        },
        {
            path:'proyectos',
            component:ProjectsComponent
        }
    ]
}];
