import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import {FormsModule} from "@angular/forms";
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';
import {DemoComponent} from "./demo/demo.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {ListManagerComponent} from "./list-manager/list-manager.component";
import {TodoListService} from "./services/todo-list.service";

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TwoWayBidingComponent,
    DemoComponent,
    TodoItemComponent,
    ListManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
