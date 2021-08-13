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
        id:"INS1",
        title: 'oximeter',
        price: '1869',
        image: '../../../assets/images/oximeter.webp'
      },
      {
        id:"INS2",
        title: 'Thermometer',
        price: '103',
        image: '../../../assets/images/thermometer.webp'
      },
      {
        id:"INS3",
        title: 'Thermogun',
        price: '575',
        image: '../../../assets/images/thermogun.webp'
      },
      {
        id:"INS4",
        title: 'Steamer',
        price: '120',
        image: '../../../assets/images/steamer.jpg'
      },
      {
        id:"INS5",
        title: 'steam vapourizer',
        price: '160',
        image: '../../../assets/images/e steam vaporizer.webp'
      },
      {
        id:"INS6",
        title: 'Thermoflask bottle',
        price: '759',
        image: '../../../assets/images/Thermoflask bottle.webp'
      },
      {
        id:"INS7",
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
