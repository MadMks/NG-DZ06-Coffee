import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoffeeComponent } from './componentns/list-coffee/list-coffee.component';
import { SelectedCoffeeComponent } from './componentns/selected-coffee/selected-coffee.component';
import {OrderComponent} from './componentns/order/order.component';

const routes: Routes = [
  {path: '', component: ListCoffeeComponent},
  {path: 'selected-coffee/:id', component: SelectedCoffeeComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
