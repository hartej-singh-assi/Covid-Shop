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
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown21.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown20.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown3.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown4.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown5.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown6.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '30',
      image: '../../../assets/images/gown7.jpg'
    },

    ]
  }

}
