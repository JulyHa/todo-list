import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }


}
