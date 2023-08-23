import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../interface/todo-item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() item : TodoItem;
  @Input() index : number;
  @Output() remove = new EventEmitter<number>();
  @Output() update = new EventEmitter<any>();
  @Output() outItem = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
  }
  updateItem(index : number){
    let res = prompt("Nhập tên: ");
    this.item = {title: res, completed: this.item.completed};
    this.update.emit({item : this.item, index : index});
  }
  completeItem(index : number){
    this.item.completed = !this.item.completed;
    this.outItem.emit({item: this.item, change : this.item.completed})
    this.update.emit({item : this.item, index : index});
  }
  deleteItem(index){
    this.remove.emit(index)
  }
}
