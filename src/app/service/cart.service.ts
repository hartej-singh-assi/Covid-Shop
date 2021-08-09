import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(Product : any){
    this.cartItemList.push(...Product);
    this.productList.next(Product);
  }

  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a : any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  clearCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
