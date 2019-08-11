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
  arrSugar = [];
  private lastCountCoffee = 1;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataCoffeeService) {
    this.id = activeRoute.snapshot.params.id;

    this.addCoffeeInOrder(this.countCoffee);
  }

  ngOnInit() {

  }

  addCoffeeInOrder(count: number) {
    const obj = this.dataService.getCoffeeObj(this.id);

    for ( let i = 0; i < count; i++) {
      const tempObjCoffee = {
        title: '',
        img: '',
        price: 0,
        sugar: 0
      };
      // Копируем начальные данные кофе в новый обьект
      tempObjCoffee.title = obj.title;
      tempObjCoffee.img = obj.img;
      tempObjCoffee.price = obj.price;
      tempObjCoffee.sugar = 0;
      // Добавляем кофе в заказ
      this.currentCoffee.push(tempObjCoffee);
      // Записываем начальное кол-во сахара в доп массив для вывода
      this.arrSugar.push(0);
    }
  }
  ngAfterContentChecked() {
  }

  countChange() {
    // Удаление кофе и сахара (из доп массива)
    if ( this.lastCountCoffee > this.countCoffee) {
      this.currentCoffee.splice(this.countCoffee);
      this.arrSugar.splice(this.countCoffee);
    // Добавление кофе
    } else if (this.lastCountCoffee < this.countCoffee) {
      const countAdd = this.countCoffee - this.lastCountCoffee;
      this.addCoffeeInOrder(countAdd);
      // Записываем новое значение сахара
      this.lastCountCoffee = this.countCoffee;
    }
  }

  addCard() {
    console.log(this.currentCoffee);
    this.dataService.addOrderCoffee(this.currentCoffee);
  }

  addSugar(count: number, index: number) {
    this.currentCoffee[index].sugar = count;

    this.arrSugar[index] = count;
  }
}
