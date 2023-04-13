import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    menuItems: any[];
    
    constructor() {
        this.menuItems = [{
            title: 'Home',
            link: '/home'
        }, {
            title: 'About Us',
            link: '/about-us'
        }, {
            title: 'Connect',
            link: '/connect'
        }]
    }
}
