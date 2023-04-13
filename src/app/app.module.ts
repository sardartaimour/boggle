import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
