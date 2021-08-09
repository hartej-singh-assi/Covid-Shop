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
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer.png'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer1.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer2.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer3.jpg_1700Wx1700H'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer4.png'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer5.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer6.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer7.jpg'
      },
      { 
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer8.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer9.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer10.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer11.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer12.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer13.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer14.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer15.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer16.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer17.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer18.jpg'
      },
      {
        title: 'Hand-Sanitizer',
        price: '30',
        image: '../../../assets/images/sanitizer19.jpg'
      },

    ]
  }

  addToCart(sanp: any){
    this.cartService.addToCart(sanp);
  }

}
