import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-turban-mask',
  templateUrl: './turban-mask.component.html',
  styleUrls: ['./turban-mask.component.scss']
})
export class TurbanMaskComponent implements OnInit {

  constructor(private cartService : CartService) { }

  tmaskproducts : any = [];

  ngOnInit(): void {
    this.tmaskproducts=[
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

  addToCart(tmask: any){
    this.cartService.addToCart(tmask);
  }

}
