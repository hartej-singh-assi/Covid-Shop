import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  localItem : any;
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  
  constructor() {
    // this.localItem = localStorage.getItem('cartItemList');
    // if(this.localItem == null){
    //   this.cartItemList = [];
    // }
    // else{
    //   this.cartItemList = JSON.parse(this.localItem);
    // }
   }
  // getProducts(){
  //   return this.productList.asObservable();
  // }

  // setProducts(Product : any){
  //   this.cartItemList.push(...Product);
  //   this.productList.next(Product);
  // }

  addToCart(product : any){
    const prodIndex = this.cartItemList.findIndex((x: any) => String(x.id) === String(product.id));
    if (prodIndex > -1) {
      this.cartItemList[prodIndex]['quantity'] += 1; 
    } else {
      this.cartItemList.push({...product, quantity: 1});
    }
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList);
    localStorage.setItem("cartItemList",JSON.stringify(this.cartItemList));
  }

  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a : any)=>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal;
  // }

  clearCart(){
    this.cartItemList = []
    // this.productList.next(this.cartItemList);
    localStorage.setItem("cartItemList",JSON.stringify([]));

  }
}
