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
        title: 'oximeter',
        price: '1869',
        image: '../../../assets/images/oximeter.webp'
      },
      {
        title: 'Thermometer',
        price: '103',
        image: '../../../assets/images/thermometer.webp'
      },
      {
        title: 'Thermogun',
        price: '575',
        image: '../../../assets/images/thermogun.webp'
      },
      {
        title: 'Steamer',
        price: '120',
        image: '../../../assets/images/steamer.jpg'
      },
      {
        title: 'steam vapourizer',
        price: '160',
        image: '../../../assets/images/e steam vaporizer.webp'
      },
      {
        title: 'Thermoflask bottle',
        price: '759',
        image: '../../../assets/images/Thermoflask bottle.webp'
      },
      {
        title: 'Electric Kettle',
        price: '565',
        image: '../../../assets/images/kettle.webp'
      },

    ]
  }

  addToCart(ins: any){
    this.cartService.addToCart(ins);
  }

}
