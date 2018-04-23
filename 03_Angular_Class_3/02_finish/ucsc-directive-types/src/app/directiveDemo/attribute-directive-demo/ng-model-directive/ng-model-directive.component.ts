import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-model-directive',
  template: `
    <input [(ngModel)]="username">
    <p>Hello {{username}}!</p> 
  `,
  styles: []
})
export class NgModelDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
