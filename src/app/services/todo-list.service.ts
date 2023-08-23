import { Injectable } from '@angular/core';
import {TodoItem} from "../interface/todo-item";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor() { }
  private todoList : Array<TodoItem> = JSON.parse(localStorage.getItem("item"))== null?[]:JSON.parse(localStorage.getItem("item"));
  getTodoList() : TodoItem[]{
    return this.todoList;
  }
  addItem(value : string) : void{
    this.todoList.push({title : value, completed : false})
    localStorage.setItem("item", JSON.stringify(this.todoList));

  }
  editItem(index : number, value : TodoItem){
    this.todoList[index] = value;
    localStorage.setItem("item", JSON.stringify(this.todoList));
  }
  deleteItem(index : number){
    this.todoList.splice(index, 1);
    localStorage.setItem("item", JSON.stringify(this.todoList));
  }
}
