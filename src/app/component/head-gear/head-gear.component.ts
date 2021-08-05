import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-gear',
  templateUrl: './head-gear.component.html',
  styleUrls: ['./head-gear.component.scss']
})
export class HeadGearComponent implements OnInit {

  constructor() { }

  hgearproducts : any = [];

  ngOnInit(): void {
    this.hgearproducts=[
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
