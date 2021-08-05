import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.scss']
})
export class SanitizerComponent implements OnInit {

  constructor() { }

  sanitaryproducts : any = [];

  ngOnInit(): void {
    this.sanitaryproducts=[
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
