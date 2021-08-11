import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  constructor(private cartService : CartService) { }

  medproducts : any = [];

  ngOnInit(): void {
    this.medproducts=[
      { 
        title: 'Dolo-500',
        price: '15',
        image: '../../../assets/images/dolo-500.jpg'
      },
      {
        title: 'Dolo-650',
        price: '29.06',
        image: '../../../assets/images/dolo650.jpg'
      },
      {
        title: 'Crosin-120 Syrup',
        price: '35',
        image: '../../../assets/images/crosin120.jpg'
      },
      {
        title: 'Xylomist Nasal Dropper',
        price: '46.70',
        image: '../../../assets/images/xylomist.jpg'
      },
      {
        title: 'Crosin',
        price: '20.40',
        image: '../../../assets/images/crosin.webp'
      },
      {
        title: 'Zeet',
        price: '101.70',
        image: '../../../assets/images/zeet.jpg'
      },
      {
        title: 'Calpol-500',
        price: '12.72',
        image: '../../../assets/images/calpol500.jpg'
      },
      {
        title: 'Calpol-650',
        price: '26.13',
        image: '../../../assets/images/calpol650.jpg'
      },
      {
        title: 'Paracetamol',
        price: '24.73',
        image: '../../../assets/images/paracetamol.jpg'
      },
      {
        title: 'Shelcal-500',
        price: '108.70',
        image: '../../../assets/images/shelcal500.jpg'
      },
      { 
        title: 'Pan-20',
        price: '103',
        image: '../../../assets/images/pan2.png'
      },
      {
        title: 'Pan-40',
        price: '119.02',
        image: '../../../assets/images/pan4.jpg'
      },
      {
        title: 'Pantium-40',
        price: '104',
        image: '../../../assets/images/pantium4.jpg'
      }
      
    ]
  }

  addToCart(meds: any){
    this.cartService.addToCart(meds);
  }

}
