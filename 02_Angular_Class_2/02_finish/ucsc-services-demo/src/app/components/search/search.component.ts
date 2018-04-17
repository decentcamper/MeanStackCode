import { Component, OnInit } from '@angular/core';


import {RecipeDetails} from "../../models/recipe-details";
import {Recipes} from "../../models/recipes";
import {RecipeDetailsService} from "../../services/recipe-details.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [RecipeDetailsService]
})
export class SearchComponent implements OnInit {

  recipes : RecipeDetails[];

  constructor(private recipeService: RecipeDetailsService) { }


  getRecipes() : void {
    this.recipeService.getRecipes().then(movies =>{
        this.recipes = movies
       console.log(this.recipes)
    }); // the TS allows this nice little syntax to acheive this
  }


  ngOnInit() {
      this.getRecipes();

  }

}
