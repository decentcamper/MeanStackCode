import { Injectable } from '@angular/core';
import {Recipes} from "../models/recipes";
import {RecipeDetails} from "../models/recipe-details";

@Injectable()
export class RecipeDetailsService {

  constructor() { }

  getRecipes() : Promise<RecipeDetails [] >{
    return Promise.resolve(Recipes);
  }




}
