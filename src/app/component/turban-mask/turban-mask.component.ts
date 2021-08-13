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
        id:"T1",
        title: 'Turban Mask',
        price: '169',
        image: '../../../assets/images/tmask1.jpeg'
      },
      {
        id:"T2",
        title: 'Turban Mask',
        price: '210',
        image: '../../../assets/images/tmask2.jpeg'
      },
      {
        id:"T3",
        title: 'Turban Mask Extender',
        price: "24",
        image: '../../../assets/images/tmask3.jpeg'
      },
      {
        id:"T4",
        title: 'Turban Mask Extender',
        price: '119',
        image: '../../../assets/images/Turban Mask (Long String).jpg'
      },


    ]
  }

  addToCart(tmask: any){
    this.cartService.addToCart(tmask);
  }

}
