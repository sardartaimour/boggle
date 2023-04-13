import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		AppRoutingModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
  		ConnectComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
