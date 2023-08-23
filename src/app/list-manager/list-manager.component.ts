import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../interface/todo-item";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit{
  todoListService : TodoListService;
  todoList : TodoItem[];
  addItem(value : string){
    this.todoListService.addItem(value)
  }

  updateItem(index :{item : TodoItem, index : number}){
    this.todoListService.editItem(index.index, index.item)
  }

  deleteItem(index: number){
    let res = confirm("Do you want to delete item?");
    if(res) {
      this.todoListService.deleteItem(index);
    }
  }

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
}
