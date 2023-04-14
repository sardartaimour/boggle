import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';


@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
