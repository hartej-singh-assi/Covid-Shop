import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-mask',
  templateUrl: './cool-mask.component.html',
  styleUrls: ['./cool-mask.component.scss']
})
export class CoolMaskComponent implements OnInit {

  constructor() { }

  cmaskproducts : any = [];
  
  ngOnInit(): void {
    this.cmaskproducts=[
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
