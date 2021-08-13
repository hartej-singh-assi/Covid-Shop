import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'covidshop';
  
  
  constructor(private cartService : CartService) {}
  
  ngOnInit():void{
    const data:any = localStorage.getItem("cartItemList");
    if (data) {
      this.cartService.cartItemList = JSON.parse(data);
    } else {
      this.cartService.cartItemList = [];
    }
    console.log('Cart =>', this.cartService.cartItemList);
  }
}
