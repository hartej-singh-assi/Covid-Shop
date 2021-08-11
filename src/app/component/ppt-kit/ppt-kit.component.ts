import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-ppt-kit',
  templateUrl: './ppt-kit.component.html',
  styleUrls: ['./ppt-kit.component.scss']
})
export class PptKitComponent implements OnInit {

  constructor(private cartService : CartService) { }

  pptproducts : any = [];


  ngOnInit(): void {
    this.pptproducts=[
    { 
      title: 'PPT-Kit',
      price: '330',
      image: '../../../assets/images/gown.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '304',
      image: '../../../assets/images/gown21.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '299',
      image: '../../../assets/images/gown20.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '599',
      image: '../../../assets/images/gown3.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '499',
      image: '../../../assets/images/gown4.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '458',
      image: '../../../assets/images/gown5.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '165',
      image: '../../../assets/images/gown6.jpg'
    },
    {
      title: 'PPT-Kit',
      price: '124',
      image: '../../../assets/images/gown7.jpg'
    },

    ]
  }

  addToCart(ppt: any){
    this.cartService.addToCart(ppt);
  }

}
