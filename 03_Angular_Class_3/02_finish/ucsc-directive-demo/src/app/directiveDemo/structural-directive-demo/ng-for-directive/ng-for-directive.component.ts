import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
    <h4>{{title}}</h4>

    <strong>Using ngFor directive</strong>
    
    <p>The syntax is <code>*ngFor="let &lt;value&gt; of &lt;collection&gt;"</code>.</p>

    <p><em>&lt;value&gt;</em> is a&nbsp;variable name of&nbsp;your choosing, <em>&lt;collection&gt;</em> is a&nbsp;property on&nbsp;your component which holds a&nbsp;collection, usually an&nbsp;array but anything that can be iterated over in&nbsp;a <code>for-of</code> loop.</p>
    
    <ul>
      <li *ngFor="let person of people; let i = index">
       {{i +1}} {{ person.name }}  ({{person.country}})
      </li>
    </ul>  `,
  styles: []
})
export class NgForDirectiveComponent implements OnInit {
  title = 'Structural Directives: ngFor Directive';

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
