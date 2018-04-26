import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  template: `
    <h4>NgStyle</h4>
    <ul *ngFor="let person of people">
      <li [ngStyle]="{'color':getColor(person.country)}"> {{ person.name }} ({{ person.country }})</li>
    </ul>    
  <div style="align-content: baseline; background: #05abe0" class="primary"
  `,


  styles: []
})
export class NgStyleDirectiveComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

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

}
