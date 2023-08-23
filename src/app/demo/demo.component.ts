import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title : string = ""
  @Output() submit :EventEmitter<string> = new EventEmitter<string>();

  getInputValue(event : Event){
    return (event.target as HTMLInputElement).value
  }
  submitValue(value : string){
    this.submit.emit(value);
    this.title = "";
  }
}
