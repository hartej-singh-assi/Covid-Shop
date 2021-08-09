import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-essential',
  templateUrl: './essential.component.html',
  styleUrls: ['./essential.component.scss']
})
export class EssentialComponent implements OnInit {

  constructor(private cartService : CartService) { }

  essentialproducts : any = [];

  ngOnInit(): void {
    this.essentialproducts=[
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

  addToCart(essential: any){
    this.cartService.addToCart(essential);
  }

}
