import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoffeeComponent } from './componentns/list-coffee/list-coffee.component';
import { SelectedCoffeeComponent } from './componentns/selected-coffee/selected-coffee.component';
import { DataCoffeeService } from './dataCoffee.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { OrderComponent } from './componentns/order/order.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ListCoffeeComponent,
    SelectedCoffeeComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [DataCoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
