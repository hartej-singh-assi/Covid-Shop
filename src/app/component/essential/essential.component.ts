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
        title: 'Sanitizer Stand',
        price: '345',
        image: '../../../assets/images/san stand.jpeg'
      },
      {
        title: 'Sanitizer Dispenser',
        price: '292',
        image: '../../../assets/images/san wall.webp'
      },
      {
        title: 'Small Sanitizer Pump',
        price: '299',
        image: '../../../assets/images/small san pump.webp'
      },
      {
        title: 'Sanitizer Manual pump (8L)',
        price: '1339',
        image: '../../../assets/images/san pump mach.webp'
      },
      {
        title: 'Surface Disinfectant Spray ',
        price: '112',
        image: '../../../assets/images/spray.webp'
      },
      {
        title: 'Portable Oxygen Canister',
        price: '496',
        image: '../../../assets/images/oxygen can.webp'
      }

    ]
  }

  addToCart(essential: any){
    this.cartService.addToCart(essential);
  }

}
