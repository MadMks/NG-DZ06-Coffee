import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCoffeeService {

  constructor() {
  }

  arrayCoffee = [
    {
      img: 'assets/Image/Layer 1.jpg',
      title: 'Эспресо',
      price: 100
    },
    {
      img: 'assets/Image/Layer 2.jpg',
      title: 'Американо',
      price: 200
    },
    {
      img: 'assets/Image/Layer 1.jpg',
      title: 'Эспресо',
      price: 100
    },
    {
      img: 'assets/Image/Layer 2.jpg',
      title: 'Американо',
      price: 200
    }
  ];

  orderCoffee = [];

  getCoffeeObj(indexCoffee) {
    return this.arrayCoffee[indexCoffee];
  }

  addOrderCoffee(data) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < data.length; i++) {
      this.orderCoffee.push(data[i]);
    }
    console.log(this.orderCoffee);
  }

}
