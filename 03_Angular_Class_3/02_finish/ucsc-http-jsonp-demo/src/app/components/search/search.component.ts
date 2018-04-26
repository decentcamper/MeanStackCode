import { Component, OnInit } from '@angular/core';


import {RecipeDetails} from "../../models/recipe-details";
import {Recipes} from "../../models/recipes";
import {RecipeDetailsService} from "../../services/recipe-details.service";
import {RecipeItem} from "../../../../../ucsc-second-routing/src/app/models/RecipeItem";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [RecipeDetailsService]
})
export class SearchComponent implements OnInit {

  recipes : RecipeDetails[];

  constructor(private recipeService: RecipeDetailsService) { }

  mapRecipes(recipes) :void {
    this.recipes= recipes.hits.map(item => {
      return new RecipeItem (
        item.recipe.uri,
        item.recipe.label,
        item.recipe.image,
        item.recipe.source,
        item.recipe.shareAs,
        item.recipe.url,
        item.recipe.calories,
        item.recipe.totalWeight,
        item.recipe.totalTime,
        item.recipe.healthLabels

      );
    });



  }

  getRecipes() : void {


    /**
     * The Code which fetches the data using the promises...
     */

    this.recipeService.getRecipesThroughPromise("").then(recipes =>{
         console.log(recipes);
         this.mapRecipes(recipes);
       });


    /**
     * The code which uses the observer-subscriber model
     *
     */
    this.recipeService.getRecipesThroughObservables("").subscribe(recipes => {
      console.log(recipes);
      this.mapRecipes(recipes)
    });


  }



  ngOnInit() {
      this.getRecipes();

  }

}
