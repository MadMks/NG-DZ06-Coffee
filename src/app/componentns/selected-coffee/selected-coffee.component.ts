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
  // countPortions = 1;
  private lastCountCoffee = 1;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataCoffeeService) {
    this.id = activeRoute.snapshot.params.id;

    this.addCoffeeInOrder();
  }

  ngOnInit() {

  }

  addCoffeeInOrder() {
    const obj = this.dataService.getCoffeeObj(this.id);
    obj['sugar'] = 0;
    this.currentCoffee.push(obj);
  }
  ngAfterContentChecked() {
    // this.currentCoffee = [];
    // for (let i = 0; i < this.countCoffee; i++) {
    //   this.currentCoffee.push(this.dataService.getCoffeeObj(this.id));
    // }
  }

  countChange() {
    const objCoffee = this.dataService.getCoffeeObj(this.id);
    console.log(1);
    if ( this.lastCountCoffee > this.countCoffee) {
      this.currentCoffee.splice(this.countCoffee);
      console.log(2);
    } else if (this.lastCountCoffee < this.countCoffee) {
      // this.currentCoffee.push(objCoffee);
      console.log(3);
      this.addCoffeeInOrder();
    }
    console.log(4);
    this.lastCountCoffee = this.countCoffee;
  }

  addCard() {
    this.dataService.addOrderCoffee(this.currentCoffee);
    // this.router.navigate(['./']);
  }

  addSugar(count: number, index: number) {

  }
}
