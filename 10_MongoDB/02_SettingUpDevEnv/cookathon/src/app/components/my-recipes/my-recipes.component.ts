import { Component, OnInit } from '@angular/core';
import {RecipeDetailsService} from "../../services/recipe-details.service";
import {RecipeItem} from "../../models/recipe-item";
import {RecipeDetails} from "../../models/recipe-details";

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
  providers: [RecipeDetailsService]
})
export class MyRecipesComponent implements OnInit {
  recipes : RecipeDetails[];
  constructor(private recipeService: RecipeDetailsService) { }


  mapRecipes(recipes) :void {
    this.recipes= recipes.map(item => {
      return new RecipeItem (
        item.uri,
        item.label,
        'data:image/png;base64,' + item.imgFile.value ,
        item.source,
        item.shareAs,
        item.url,
        item.calories,
        item.totalWeight,
        item.totalTime,
        item.healthLabels,
        item._id
      );
    });
    console.log(this.recipes);
  }
  getRecipes() : void {
    this.recipeService.getMyRecipesThroughObservables().subscribe(recipes => {
      console.log(recipes);
      this.mapRecipes(recipes)
    });
  }

  removeRecipe(recipeID: string) {
    if(confirm("Are you sure to delete "+recipeID)) {
      this.recipeService.deleteMyRecipeThroughObservables(recipeID).subscribe(recipe => {
        console.log(recipe);
        alert(`${recipeID} has been deleted !!!!!!`);
      });
    }
  }
  ngOnInit() {
    this.getRecipes();
  }
}
