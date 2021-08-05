import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt-kit',
  templateUrl: './ppt-kit.component.html',
  styleUrls: ['./ppt-kit.component.scss']
})
export class PptKitComponent implements OnInit {

  constructor() { }

  pptproducts : any = [];


  ngOnInit(): void {
    this.pptproducts=[
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
