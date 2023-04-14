import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'about-us',
        component: AboutComponent
    }, {
        path: 'connect',
        component: ConnectComponent
    }, {
        path: 'my-profile',
        component: ProfileComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }, {
        path: '**', redirectTo: 'home'
    }
];

