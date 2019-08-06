import {Component, OnInit, AfterContentChecked} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataCoffeeService} from '../../dataCoffee.service';

@Component({
  selector: 'app-selected-coffee',
  templateUrl: './selected-coffee.component.html',
  styleUrls: ['./selected-coffee.component.css']
})
export class SelectedCoffeeComponent implements OnInit, AfterContentChecked {

  id: string;
  currentCoffee = [];
  countCoffee = 1;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataCoffeeService) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    this.currentCoffee = [];
    for (let i = 0; i < this.countCoffee; i++) {
      this.currentCoffee.push(this.dataService.getCoffeeObj(this.id));
    }
  }

  addCard() {
    this.dataService.addOrderCoffee(this.currentCoffee);
    // this.router.navigate(['./']);
  }
}
