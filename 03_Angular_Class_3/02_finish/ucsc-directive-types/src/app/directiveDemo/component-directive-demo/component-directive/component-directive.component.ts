import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-directive',
  template: `
    <p>
      {{title}}
    </p>
  `,
  styles: []
})
export class ComponentDirectiveComponent implements OnInit {
  title = 'Learning Directives'
  constructor() { }

  ngOnInit() {
  }

}
