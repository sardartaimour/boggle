import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  jobs: any[];

  constructor() {
    this.jobs = [
        {
            title: 'Draw a Polygon shape on React JS',
            description: `Hi,
                I needed some expert to build a solution in react in which we have an image, we
                have to draw a polygon line or polygon shape on the provided image
                Attaching link below is the example of what we exc=actly want:`
        }, {
            title: 'Draw a Polygon shape on React JS',
            description: `Hi,
                I needed some expert to build a solution in react in which we have an image, we
                have to draw a polygon line or polygon shape on the provided image
                Attaching link below is the example of what we exc=actly want:`
        }
    ]
  }

}
