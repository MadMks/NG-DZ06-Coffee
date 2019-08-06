import { Component, OnInit } from '@angular/core';
import {DataCoffeeService} from '../../dataCoffee.service';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.css']
})
export class ListCoffeeComponent implements OnInit {

  constructor(private dataCoffee: DataCoffeeService) {
    console.log(this.dataCoffee.orderCoffee);
  }

  list = this.dataCoffee.arrayCoffee;

  ngOnInit() {
    console.log(this.dataCoffee.arrayCoffee);
  }

}
