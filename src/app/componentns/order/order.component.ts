import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from '../../dataCoffee.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['name', 'sugar', 'price'];
  listOrder;
  constructor(private dataService: DataCoffeeService) {
    this.listOrder = this.dataService.orderCoffee;
  }

  ngOnInit() {
  }

  getTotalCost() {
    let totalCost = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listOrder.length; i++) {
      totalCost = totalCost + this.listOrder[i].price;
    }
    return totalCost;
  }

}
