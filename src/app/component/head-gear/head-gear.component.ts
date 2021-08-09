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
        price: '30',
        image: '../../../assets/images/goggle.jpeg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle1.png'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle2.png'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle3.jpg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle4.jpg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle5.jpeg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle6.jpg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle7.jpg'
      },
      {
        title: 'Goggle',
        price: '30',
        image: '../../../assets/images/goggle8.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield-mask-side.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/Face-shield1.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/Face_shield2.webp'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/Face-shield3.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield4.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield5.cms'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield6.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield7.jpg'
      },
      {
        title: 'Face-Shield',
        price: '30',
        image: '../../../assets/images/face-shield8.jpg.crdownload'
      },



    ]
  }

  addToCart(hgear: any){
    this.cartService.addToCart(hgear);
  }

}
