import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',

  template: `
    <h4>{{title}}</h4>    <strong>Using ngIf directive</strong>
    <div class="paragraph">
      <p>The&nbsp;<code>NgIf</code> directive is used when you want to&nbsp;display or&nbsp;remove an&nbsp;element based on&nbsp;a condition.</p>
    </div>
    <div class="paragraph">
      <p>If the&nbsp;condition is <code>false</code> the&nbsp;element the&nbsp;directive is <em>attached to</em> will be <em>removed</em> from the&nbsp;<abbr>DOM</abbr>.</p>
    </div>
    <div class="paragraph">
      <p>We define the&nbsp;condition by&nbsp;passing an&nbsp;expression to&nbsp;the directive which is evaluated in&nbsp;the context of&nbsp;it’s host component.</p>
    </div>
    <div class="paragraph">
      <p>The&nbsp;syntax is: <code>*ngIf="&lt;condition&gt;"</code></p>
    </div>
    
    
  <div *ngIf="isLoggedIn"><p>Hello Recipe Author</p></div>
  <div *ngIf="!isLoggedIn"><p>Hello Guest user</p></div>      
    <ul>
      <li *ngFor="let person of people; let i = index">
        {{i +1}} {{ person.name }}  ({{person.country}})
      </li>
    </ul>   
  `,

  styles: []
})
/**
 * Let's analyze the preceding code snippet in detail:
 * We used *ngFor and *ngIf in the view template.
 * In the component class, we define a isLoggedIn variable with Boolean values.
 * We create an array of teams having team names in the list,
 * which we will iterate and display in the view.
 */
export class NgIfDirectiveComponent implements OnInit {


  title = 'Structural Directives: ngIF Directive';
  isLoggedIn = false;

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
