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
        id:"MED1",
        title: 'Dolo-500',
        price: '15',
        image: '../../../assets/images/dolo-500.jpg'
      },
      {
        id:"MED1",
        title: 'Dolo-650',
        price: '29.06',
        image: '../../../assets/images/dolo650.jpg'
      },
      {
        id:"MED2",
        title: 'Crosin-120 Syrup',
        price: '35',
        image: '../../../assets/images/crosin120.jpg'
      },
      {
        id:"MED3",
        title: 'Xylomist Nasal Dropper',
        price: '46.70',
        image: '../../../assets/images/xylomist.jpg'
      },
      {
        id:"MED4",
        title: 'Crosin',
        price: '20.40',
        image: '../../../assets/images/crosin.webp'
      },
      {
        id:"MED5",
        title: 'Zeet',
        price: '101.70',
        image: '../../../assets/images/zeet.jpg'
      },
      {
        id:"MED6",
        title: 'Calpol-500',
        price: '12.72',
        image: '../../../assets/images/calpol500.jpg'
      },
      {
        id:"MED7",
        title: 'Calpol-650',
        price: '26.13',
        image: '../../../assets/images/calpol650.jpg'
      },
      {
        id:"MED8",
        title: 'Paracetamol',
        price: '24.73',
        image: '../../../assets/images/paracetamol.jpg'
      },
      {
        id:"MED9",
        title: 'Shelcal-500',
        price: '108.70',
        image: '../../../assets/images/shelcal500.jpg'
      },
      { 
        id:"MED10",
        title: 'Pan-20',
        price: '103',
        image: '../../../assets/images/pan2.png'
      },
      {
        id:"MED11",
        title: 'Pan-40',
        price: '119.02',
        image: '../../../assets/images/pan4.jpg'
      },
      {
        id:"MED12",
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
