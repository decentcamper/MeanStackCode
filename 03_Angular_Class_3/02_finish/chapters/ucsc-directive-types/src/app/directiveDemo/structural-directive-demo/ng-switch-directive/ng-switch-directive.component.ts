import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styles: []
})
export class NgSwitchDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Structural Directives: ngSwitch Demo';
  taxRate = "state";
  isLoggedIn= true;

  public languages = [
    { name: "PHP"},
    { name: "JavaScript"},
    { name: "Ruby"},
    { name: "Java"},
    { name: "HTML5"}
  ];

}
