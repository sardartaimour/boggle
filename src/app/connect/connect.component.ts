import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {

  recuriters: any[];

  constructor() {
    this.recuriters = [1, 4, 6, 7]
  }
}
