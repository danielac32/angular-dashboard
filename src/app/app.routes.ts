import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/layout/dashboard.component'
import { ReservationsPageComponent } from './dashboard/pages/reservations-page/reservations-page.component';
import { ProfilePageComponent } from './dashboard/pages/profile-page/profile-page.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout.component'


import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { UsersComponent } from './auth/pages/users/users.component'
import {CreateUserComponent} from './auth/pages/create-user/create-user.component'
import { AuthGuard } from './auth/services/auth.guard';
import { EditComponent } from './auth/components/edit/edit.component';
import {CreateReservationsComponent} from './dashboard/pages/reservations-page/pages/create-reservations/create-reservations.component'
import {IndexReservationsComponent} from './dashboard/pages/reservations-page/pages/index-reservations/index-reservations.component'
import {ReservationScreenComponent} from './dashboard/pages/reservations-page/pages/reservation-screen/reservation-screen.component'


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
            children: [
                {
                    path: 'crear-reservacion',
                    title: 'crear-reservacion',
                    component: CreateReservationsComponent,
                },
                {
                    path: 'reservacion/:id',
                    title: 'reservacion',
                    component: ReservationScreenComponent,
                },
                {
                    path: 'reservaciones',
                    title: 'list',
                    component: IndexReservationsComponent,
                },
            ]
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
        },
        {
            path: 'create-user',
            title: 'create-user',
            // loadComponent: () => import('./dashboard/pages/profile-page/profile-page.component'),
            component: CreateUserComponent,data: { rol:'ADMIN' },
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
