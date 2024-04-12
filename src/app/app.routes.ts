import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/layout/dashboard.component'
import { ReservationsPageComponent } from './dashboard/pages/reservations-page/reservations-page.component';
import { ProfilePageComponent } from './dashboard/pages/profile-page/profile-page.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout.component'


import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { UsersComponent } from './auth/pages/users/users.component'
import { AuthGuard } from './auth/services/auth.guard';
import { EditComponent } from './auth/components/edit/edit.component';


export const routes: Routes = [
{ 
    path: 'dashboard', 
    // loadComponent: () => import('./dashboard/layout/dashboard.component'),
    component: DashboardComponent,canActivate: [AuthGuard],
    children: [
        {
            path: 'reservations',
            title: 'Reservations',
            // loadComponent: () => import('./dashboard/pages/reservations-page/reservations-page.component'),
            component: ReservationsPageComponent,
        },
        {
            path: 'profile',
            title: 'Profile',
            // loadComponent: () => import('./dashboard/pages/profile-page/profile-page.component'),
            component: ProfilePageComponent
        },
        {
            path: 'users',
            title: 'users',
            // loadComponent: () => import('./dashboard/pages/profile-page/profile-page.component'),
            component: UsersComponent,data: { rol:'ADMIN' },
            children: [
                {
                    path: 'edit',
                    title: 'edit',
                    component: EditComponent,
                }
            ]
        }
    ]
},
{ 
    path: 'auth', component: AuthLayoutComponent, 
    children: [
        {
            path: 'login',
            title: 'login',
            // loadComponent: () => import('./dashboard/pages/reservations-page/reservations-page.component'),
            component: LoginComponent
        },
        {
            path: 'register',
            title: 'register',
            // loadComponent: () => import('./dashboard/pages/profile-page/profile-page.component'),
            component: RegisterComponent
        },
    ]
}, 

{ path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
