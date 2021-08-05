import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n95',
  templateUrl: './n95.component.html',
  styleUrls: ['./n95.component.scss']
})
export class N95Component implements OnInit {

  constructor() { }

  n95products : any = [];

  ngOnInit(): void {
    this.n95products=[
      {
        title: 'one',
        price: '30',
        image: ''
      },
      {
        title: 'two',
        price: '30',
        image: ''
      }

    ]
  }

}
