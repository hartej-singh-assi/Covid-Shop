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
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask1.webp'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask7.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask8.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask2.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask3.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask9.png'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask10.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask4.jpg'
      },
      { 
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask11.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask12.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask13.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask14.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask5.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask6.png'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask15.webp'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask16.webp'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: './../../assets/images/mask17.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask18.jpeg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask19.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask.jpg'
      },

    ]
  }

}
