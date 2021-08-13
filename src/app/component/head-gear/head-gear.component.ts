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
        id:"HG1",
        title: 'Goggle',
        price: '195',
        image: '../../../assets/images/goggle.jpeg'
      },
      {
        id:"HG2",
        title: 'Goggle',
        price: '110',
        image: '../../../assets/images/goggle1.png'
      },
      {
        id:"HG3",
        title: 'Goggle',
        price: '129',
        image: '../../../assets/images/goggle2.png'
      },
      {
        id:"HG4",
        title: 'Goggle',
        price: '150',
        image: '../../../assets/images/goggle3.jpg'
      },
      {
        id:"HG5",
        title: 'Goggle',
        price: '449',
        image: '../../../assets/images/goggle4.jpg'
      },
      {
        id:"HG6",
        title: 'Goggle',
        price: '125',
        image: '../../../assets/images/goggle5.jpeg'
      },
      {
        id:"HG7",
        title: 'Goggle',
        price: '292',
        image: '../../../assets/images/goggle6.jpg'
      },
      {
        id:"HG8",
        title: 'Goggle',
        price: '250',
        image: '../../../assets/images/goggle7.jpg'
      },
      {
        id:"HG9",
        title: 'Goggle',
        price: '699',
        image: '../../../assets/images/goggle8.jpg'
      },
      {
        id:"HG10",
        title: 'Face-Shield',
        price: '143',
        image: '../../../assets/images/face-shield-mask-side.jpg'
      },
      {
        id:"HG11",
        title: 'Face-Shield',
        price: '109',
        image: '../../../assets/images/Face-shield1.jpg'
      },
      {
        id:"HG12",
        title: 'Face-Shield',
        price: '210',
        image: '../../../assets/images/Face_shield2.webp'
      },
      {
        id:"HG13",
        title: 'Face-Shield',
        price: '699',
        image: '../../../assets/images/Face-shield3.jpg'
      },
      {
        id:"HG14",
        title: 'Face-Shield',
        price: '799',
        image: '../../../assets/images/face-shield4.jpg'
      },
      {
        id:"HG15",
        title: 'Face-Shield',
        price: '129',
        image: '../../../assets/images/face-shield5.cms'
      },
      {
        id:"HG16",
        title: 'Face-Shield',
        price: '130',
        image: '../../../assets/images/face-shield6.jpg'
      },
      {
        id:"HG17",
        title: 'Face-Shield',
        price: '139',
        image: '../../../assets/images/face-shield7.jpg'
      },
      {
        id:"HG18",
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
