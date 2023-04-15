import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-connect',
	templateUrl: './connect.component.html',
	styleUrls: ['./connect.component.css']
})
export class ConnectComponent {

	message: string;
	recuriters: any[];
	selectedRecuriter: any;

	modalRef?: BsModalRef<any>;

	constructor(private modalService: BsModalService) {

		this.message = '';
		this.selectedRecuriter = null;

		this.recuriters = [{
			id: 1,
			name: 'Katlyn Perkins',
			role: 'Google recruiter',
			image: '',
			isInviteSended: true
		}, {
			id: 2,
			name: 'Max Matherson',
			role: 'Microsoft recruiter',
			image: '',
			isInviteSended: false 
		}, {
			id: 3,
			name: 'Steven King',
			role: 'Amazon tech recruiter',
			image: '',
			isInviteSended: false 
		}, {
			id: 4,
			name: 'Walter Patterson',
			role: 'Apple recruiter',
			image: '',
			isInviteSended: false 
		}, {
			id: 5,
			name: 'Phillip Anderson',
			role: 'J.P Morgan Recruiter',
			image: '',
			isInviteSended: false 
		}];
	}

	onConnect(recuriter: any) {
		recuriter['loading'] = true;

		setTimeout(() => {
			recuriter.isInviteSended = true;
			recuriter.loading = false;
		}, 1000);
	}

	openModal(recuriter: any, template: TemplateRef<any>) {
		this.selectedRecuriter = recuriter
		this.modalRef = this.modalService.show(template);
	}

	onSendMessage() {
		this.selectedRecuriter['message_sending'] = true;

		setTimeout(() => {
			const recruiter = this.recuriters.find(r => r.id === this.selectedRecuriter.id);
			if (recruiter) {
				this.modalRef?.hide();
				recruiter.isInviteSended = true;
				this.selectedRecuriter = null;
			}
		}, 1000);
	}
}
