import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.cartItemList;
    this.products.map((x: any) => {
      x.amount = Number(x.price) * Number(x.quantity);
      this.grandTotal += Number(x.amount);
    });
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    //   console.log(this.grandTotal);
    // })
  }
  emptycart(){
    this.products = [];
    this.cartService.clearCart();
  }

}
