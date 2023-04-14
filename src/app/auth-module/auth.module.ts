import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


const routes: Route[] = [
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
        ReactiveFormsModule,
		RouterModule.forChild(routes)
	]
})
export class AuthModule { }