import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCoffeeService {

  constructor() {
  }

  arrayCoffee = [
    {
      img: 'assets/Image/1.jpg',
      title: 'Эспрессо',
      price: 10
    },
    {
      img: 'assets/Image/2.jpg',
      title: 'Доппио',
      price: 20
    },
    {
      img: 'assets/Image/3.jpg',
      title: 'Кофе по Венски',
      price: 30
    },
    {
      img: 'assets/Image/4.jpg',
      title: 'Романо',
      price: 40
    },
    {
      img: 'assets/Image/5.jpg',
      title: 'Ристретто',
      price: 50
    },
    {
      img: 'assets/Image/6.jpg',
      title: 'Лунго',
      price: 60
    },
    {
      img: 'assets/Image/7.jpg',
      title: 'Американо',
      price: 70
    },
    {
      img: 'assets/Image/8.jpg',
      title: 'Маккиато',
      price: 80
    },
    {
      img: 'assets/Image/9.jpg',
      title: 'Кон панна',
      price: 90
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
