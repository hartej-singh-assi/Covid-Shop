import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turban-mask',
  templateUrl: './turban-mask.component.html',
  styleUrls: ['./turban-mask.component.scss']
})
export class TurbanMaskComponent implements OnInit {

  constructor() { }

  tmaskproducts : any = [];

  ngOnInit(): void {
    this.tmaskproducts=[
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
