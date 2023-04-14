import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ConnectComponent } from './connect/connect.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
  		ConnectComponent,
    	ProfileComponent,
     	LoginComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
