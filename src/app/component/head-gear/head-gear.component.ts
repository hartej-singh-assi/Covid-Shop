import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-head-gear',
  templateUrl: './head-gear.component.html',
  styleUrls: ['./head-gear.component.scss']
})
export class HeadGearComponent implements OnInit {

  constructor(private cartService : CartService) { }
  hgearproducts : any = [];

  ngOnInit(): void {
    this.hgearproducts=[
      {
        title: 'Goggle',
        price: '195',
        image: '../../../assets/images/goggle.jpeg'
      },
      {
        title: 'Goggle',
        price: '110',
        image: '../../../assets/images/goggle1.png'
      },
      {
        title: 'Goggle',
        price: '129',
        image: '../../../assets/images/goggle2.png'
      },
      {
        title: 'Goggle',
        price: '150',
        image: '../../../assets/images/goggle3.jpg'
      },
      {
        title: 'Goggle',
        price: '449',
        image: '../../../assets/images/goggle4.jpg'
      },
      {
        title: 'Goggle',
        price: '125',
        image: '../../../assets/images/goggle5.jpeg'
      },
      {
        title: 'Goggle',
        price: '292',
        image: '../../../assets/images/goggle6.jpg'
      },
      {
        title: 'Goggle',
        price: '250',
        image: '../../../assets/images/goggle7.jpg'
      },
      {
        title: 'Goggle',
        price: '699',
        image: '../../../assets/images/goggle8.jpg'
      },
      {
        title: 'Face-Shield',
        price: '143',
        image: '../../../assets/images/face-shield-mask-side.jpg'
      },
      {
        title: 'Face-Shield',
        price: '109',
        image: '../../../assets/images/Face-shield1.jpg'
      },
      {
        title: 'Face-Shield',
        price: '210',
        image: '../../../assets/images/Face_shield2.webp'
      },
      {
        title: 'Face-Shield',
        price: '699',
        image: '../../../assets/images/Face-shield3.jpg'
      },
      {
        title: 'Face-Shield',
        price: '799',
        image: '../../../assets/images/face-shield4.jpg'
      },
      {
        title: 'Face-Shield',
        price: '129',
        image: '../../../assets/images/face-shield5.cms'
      },
      {
        title: 'Face-Shield',
        price: '130',
        image: '../../../assets/images/face-shield6.jpg'
      },
      {
        title: 'Face-Shield',
        price: '139',
        image: '../../../assets/images/face-shield7.jpg'
      },
      {
        title: 'Face-Shield',
        price: '275',
        image: '../../../assets/images/Face-shield3.jpg'
      },



    ]
  }

  addToCart(hgear: any){
    this.cartService.addToCart(hgear);
  }

}
