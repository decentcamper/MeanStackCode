import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeServiceService} from "../../services/recipe-service.service";
import {RecipeDetail} from "../../models/RecipeDetail";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeID: string;
  recipeDetails: RecipeDetail;

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) {
    this.route.params.subscribe(params => {
      this.recipeID = params.recipeID;
      console.log(params)}); // Object {artistId: 12345}
  }
  ngOnInit() {
    this.recipeService.fetchRecipeDetail(this.recipeID).then((recipeDetailsArr) => console.log(this.recipeDetails = recipeDetailsArr[0]));


  }

}
