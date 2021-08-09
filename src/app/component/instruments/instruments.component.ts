import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit {

  constructor(private cartService : CartService) { }

  instrumentproducts : any = [];

  ngOnInit(): void {
    this.instrumentproducts=[
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

  addToCart(ins: any){
    this.cartService.addToCart(ins);
  }

}
