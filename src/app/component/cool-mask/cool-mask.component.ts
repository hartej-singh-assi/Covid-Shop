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
        id: 'CM1',
        title: 'Fabric Printed Mask',
        price: '299',
        image: '../../../assets/images/mask1.webp'
      },
      {
        id: 'CM2',
        title: 'Kids Mask',
        price: '149',
        image: '../../../assets/images/mask7.jpg'
      },
      {
        id: 'CM3',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask8.jpg'
      },
      {
        id: 'CM4',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask2.jpg'
      },
      {
        id: 'CM5',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask3.jpg'
      },
      {
        id: 'CM6',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask9.png'
      },
      {
        id: 'CM7',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask10.jpg'
      },
      {
        id: 'CM8',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask4.jpg'
      },
      { 
        id: 'CM9',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask11.jpg'
      },
      {
        id: 'CM10',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask12.jpg'
      },
      {
        id: 'CM11',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask13.jpg'
      },
      {
        id: 'CM12',
        title: 'Kids Mask',
        price: '30',
        image: '../../../assets/images/mask14.jpg'
      },
      {
        id: 'CM13',
        title: 'Fabric Printed Mask',
        price: '45',
        image: '../../../assets/images/mask5.jpg'
      },
      {
        id: 'CM14',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask6.png'
      },
      {
        id: 'CM15',
        title: 'Fabric Printed Mask',
        price: '49',
        image: '../../../assets/images/mask15.webp'
      },
      {
        id: 'CM16',
        title: 'Fabric Printed Mask',
        price: '59',
        image: '../../../assets/images/mask16.webp'
      },
      {
        id: 'CM17',
        title: 'Fabric Printed Mask',
        price: '69',
        image: './../../assets/images/mask17.jpg'
      },
      {
        id: 'CM18',
        title: 'Fabric Printed Mask',
        price: '30',
        image: '../../../assets/images/mask18.jpeg'
      },
      {
        id: 'CM19',
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
