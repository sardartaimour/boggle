import { Component } from '@angular/core';

@Component({
	selector: 'app-connect',
	templateUrl: './connect.component.html',
	styleUrls: ['./connect.component.css']
})
export class ConnectComponent {

	recuriters: any[];

	constructor() {
		this.recuriters = [{
			name: 'Katlyn Perkins',
			role: 'Google recruiter',
			image: ''
		}, {
			name: 'Max Matherson',
			role: 'Microsoft recruiter',
			image: ''
		}, {
			name: 'Steven King',
			role: 'Amazon tech recruiter',
			image: ''
		}, {
			name: 'Walter Patterson',
			role: 'Apple recruiter',
			image: ''
		}, {
			name: 'Phillip Anderson',
			role: 'J.P Morgan Recruiter',
			image: ''
		}];
	}
}
