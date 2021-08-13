import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.scss']
})
export class SanitizerComponent implements OnInit {

  constructor(private cartService : CartService) { }

  sanitaryproducts : any = [];

  ngOnInit(): void {
    this.sanitaryproducts=[
      { 
        id:"SAN1",
        title: 'Hand-Sanitizer',
        price: '150',
        image: '../../../assets/images/sanitizer.png'
      },
      {
        id:"SAN2",
        title: 'Hand-Sanitizer',
        price: '120',
        image: '../../../assets/images/sanitizer1.jpg'
      },
      {
        id:"SAN3",
        title: 'Hand-Sanitizer',
        price: '110',
        image: '../../../assets/images/sanitizer2.jpg'
      },
      {
        id:"SAN4",
        title: 'Hand-Sanitizer',
        price: '110',
        image: '../../../assets/images/sanitizer3.jpg_1700Wx1700H'
      },
      {
        id:"SAN5",
        title: 'Hand-Sanitizer',
        price: '120',
        image: '../../../assets/images/sanitizer4.png'
      },
      {
        id:"SAN6",
        title: 'Hand-Sanitizer',
        price: '150',
        image: '../../../assets/images/sanitizer5.jpg'
      },
      {
        id:"SAN7",
        title: 'Hand-Sanitizer',
        price: '110',
        image: '../../../assets/images/sanitizer6.jpg'
      },
      {
        id:"SAN8",
        title: 'Hand-Sanitizer',
        price: '120',
        image: '../../../assets/images/sanitizer7.jpg'
      },
      { 
        id:"SAN9",
        title: 'Hand-Sanitizer',
        price: '130',
        image: '../../../assets/images/sanitizer8.jpg'
      },
      {
        id:"SAN10",
        title: 'Hand-Sanitizer',
        price: '200',
        image: '../../../assets/images/sanitizer9.jpg'
      },
      {
        id:"SAN11",
        title: 'Hand-Sanitizer',
        price: '250',
        image: '../../../assets/images/sanitizer10.jpg'
      },
      {
        id:"SAN12",
        title: 'Hand-Sanitizer',
        price: '110',
        image: '../../../assets/images/sanitizer11.jpg'
      },
      {
        id:"SAN13",
        title: 'Hand-Sanitizer',
        price: '120',
        image: '../../../assets/images/sanitizer12.jpg'
      },
      {
        id:"SAN14",
        title: 'Hand-Sanitizer',
        price: '180',
        image: '../../../assets/images/sanitizer13.jpg'
      },
      {
        id:"SAN15",
        title: 'Hand-Sanitizer',
        price: '109',
        image: '../../../assets/images/sanitizer14.jpg'
      },
      {
        id:"SAN16",
        title: 'Hand-Sanitizer',
        price: '150',
        image: '../../../assets/images/sanitizer15.jpg'
      },
      {
        id:"SAN17",
        title: 'Hand-Sanitizer',
        price: '250',
        image: '../../../assets/images/sanitizer16.jpg'
      },
      {
        id:"SAN18",
        title: 'Hand-Sanitizer',
        price: '150',
        image: '../../../assets/images/sanitizer17.jpg'
      },
      {
        id:"SAN19",
        title: 'Hand-Sanitizer',
        price: '180',
        image: '../../../assets/images/sanitizer18.jpg'
      },
      {
        id:"SAN20",
        title: 'Hand-Sanitizer',
        price: '190',
        image: '../../../assets/images/sanitizer19.jpg'
      },

    ]
  }

  addToCart(sanp: any){
    this.cartService.addToCart(sanp);
  }

}
