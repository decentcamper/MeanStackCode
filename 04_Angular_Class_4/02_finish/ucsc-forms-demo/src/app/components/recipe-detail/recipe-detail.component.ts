import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
}
  ngOnInit() {
  }

}
