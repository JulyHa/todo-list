import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

function add(x: number, y: number): number {
  return x + y;
}

let z = add(4, 5);
console.log(z);

@Component({
  selector: 'app-input-button-unit',
  template: `
    <!--    <p>-->
    <!--      input-button-unit works!-->
    <!--      The title is: {{ title }}-->
    <!--    </p>-->

    <!--    <input type="text" [(ngModel)]="value1">-->
    <!--    <input type="text" [(ngModel)]="value2">-->
    <!--    <input type="text" [(ngModel)] = "+value2 + +value1">-->

    <!--    <button>-->
    <!--      Save-->
    <!--    </button>-->

    <input #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue(getInputValue($event))">

    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  value1: number = 0;
  value2: number = 0;

  @Output() submit : EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
