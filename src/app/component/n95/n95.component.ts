import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-n95',
  templateUrl: './n95.component.html',
  styleUrls: ['./n95.component.scss']
})
export class N95Component implements OnInit {

  constructor(private cartService : CartService) { }

  n95products : any = [];

  ngOnInit(): void {
    this.n95products=[
      { 
        id:"N1",
        title: 'N95 (Pack of two)',
        price: '50',
        image: '../../../assets/images/mask.jpg'
      },
      {
        id:"N2",
        title: 'N95',
        price: '59',
        image: '../../../assets/images/n1.jpg'
      },
      {
        id:"N3",
        title: 'N95',
        price: '100',
        image: '../../../assets/images/n2.jpg'
      },
      {
        id:"N4",
        title: '3M N95 Mask(Pack of two)',
        price: '119',
        image: '../../../assets/images/n3.jpg'
      },
      {
        id:"N5",
        title: 'N95',
        price: '30',
        image: '../../../assets/images/n4.jpg'
      },
      {
        id:"N6",
        title: 'N95',
        price: '49',
        image: '../../../assets/images/n5.jpeg'
      },
      {
        id:"N7",
        title: 'N95',
        price: '29',
        image: '../../../assets/images/n6.jpg'
      },
      {
        id:"N8",
        title: 'N95',
        price: '25',
        image: '../../../assets/images/n7.jpg'
      },

    ]
  }

  addToCart(n95: any){
    this.cartService.addToCart(n95);
  }

}
