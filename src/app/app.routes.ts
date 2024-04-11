import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/layout/dashboard.component'
import { ReservationsPageComponent } from './dashboard/pages/reservations-page/reservations-page.component';
import { ProfilePageComponent } from './dashboard/pages/profile-page/profile-page.component';


export const routes: Routes = [
{ 
    path: 'dashboard', 
    // loadComponent: () => import('./dashboard/layout/dashboard.component'),
    component: DashboardComponent,
    children: [
        {
            path: 'reservations',
            title: 'Reservations',
            // loadComponent: () => import('./dashboard/pages/reservations-page/reservations-page.component'),
            component: ReservationsPageComponent
        },
        {
            path: 'profile',
            title: 'Profile',
            // loadComponent: () => import('./dashboard/pages/profile-page/profile-page.component'),
            component: ProfilePageComponent
        },
    ]
},

];
