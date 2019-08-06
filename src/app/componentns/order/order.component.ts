import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from '../../dataCoffee.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  listOrder;
  constructor(private dataService: DataCoffeeService) {
    this.listOrder = this.dataService.orderCoffee;
  }

  ngOnInit() {
  }

}
