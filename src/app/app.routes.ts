import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import {Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    { 
        path: 'inicio',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'profile',
                loadComponent: () => import('./pages/profile/profile.component') ,
                canActivate: [AuthGuard]
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component'),
                canActivate: [AuthGuard]
            },

        ]

    },



];
