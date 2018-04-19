import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  template: `
    <h4>Various ways of assigning values to ngClass Directive</h4>
    //passing string to assign class name
    <p [ngClass]="'text-warning'">Sample warning message</p>

    //passing array to assign class name
    <p [ngClass]="['text-danger', 'bg-dark']"> Message </p>
    //Passing object to assign class name
    <p [ngClass]="{'text-danger': textDangerIsTrue, 'text-success': textSuccessIsTrue}"> Message</p>


    //Passing component method to assign class name
    <p [ngClass]="getClass()"> Message</p>
    
    
    
    <h4>NgClass</h4>
    <ul *ngFor="let person of people">
      <li [ngClass]="getClassNameForCountry(person.country)"> {{ person.name }} ({{ person.country }})</li>
    </ul>

  `,
  styles: []
})
export class NgClassDirectiveComponent implements OnInit {

  textDangerIsTrue= false;
  textSuccessIsTrue=true;

  constructor() {
  }

  getClassNameForCountry(country){
    switch (country) {
      case 'UK':
        return 'text-warning';
      case 'USA':
        return ['text-success', 'bg-light'];
      case 'HK':
        return {'text-info':true};
    }

  }

  getClass() {
    return 'text-info'
  }

  ngOnInit() {
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
