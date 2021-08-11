import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cool-mask',
  templateUrl: './cool-mask.component.html',
  styleUrls: ['./cool-mask.component.scss']
})
export class CoolMaskComponent implements OnInit {

  constructor(private cartService : CartService) { }

  cmaskproducts : any = [];
  
  ngOnInit(): void {
    this.cmaskproducts=[
      { 
        title: 'Fabric Printed Mask',
        price: '299',
        image: '../../../assets/images/mask1.webp'
      },
      {
        title: 'Kids Mask',
        price: '149',
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
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask9.png'
      },
      {
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask10.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask4.jpg'
      },
      { 
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask11.jpg'
      },
      {
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask12.jpg'
      },
      {
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask13.jpg'
      },
      {
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask14.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '45',
        image: '../../../assets/images/mask5.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask6.png'
      },
      {
        title: 'Fabric Printed Mask',
        price: '49',
        image: '../../../assets/images/mask15.webp'
      },
      {
        title: 'Fabric Printed Mask',
        price: '59',
        image: '../../../assets/images/mask16.webp'
      },
      {
        title: 'Fabric Printed Mask',
        price: '69',
        image: './../../assets/images/mask17.jpg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask18.jpeg'
      },
      {
        title: 'Fabric Printed Mask',
        price: '249',
        image: '../../../assets/images/mask19.jpg'
      },

    ]
  }

  addToCart(cmask: any){
    this.cartService.addToCart(cmask);
  }

}
