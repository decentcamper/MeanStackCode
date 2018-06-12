import { Component, OnInit } from '@angular/core';


import {RecipeDetails} from "../../models/recipe-details";
import {RecipeDetailsService} from "../../services/recipe-details.service";
import 'rxjs/add/operator/map';
import {RecipeItem} from "../../models/recipe-item";
import {ActivatedRoute, Router} from "@angular/router"
import {FormControl} from "@angular/forms";

import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [RecipeDetailsService]
})
export class SearchComponent implements OnInit {

  recipes : RecipeDetails[];
  searchField: FormControl;
  searches: string[] = [];

  constructor(private recipeService: RecipeDetailsService,private route: ActivatedRoute,
  private router: Router) { }

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
        item.recipe.healthLabels,
        '00000'


      );
    });



  }

  getRecipes(term:string) : void {

    term = term || '';

    /**
     * The Code which fetches the data using the promises...
     */

    /*this.recipeService.getRecipesThroughPromise(term).then(recipes =>{
         console.log(recipes);
         this.mapRecipes(recipes);
       });
*/

    /**
     * The code which uses the observer-subscriber model
     *
     */
    this.recipeService.getRecipesThroughObservables(term).subscribe(recipes => {
      console.log(recipes);
      this.mapRecipes(recipes)
    });


  }

  onSearch(term: string) {
    //this.router.navigate(['search', {term: term}]);
    this.getRecipes(term);
  }

  ngOnInit() {
    this.getRecipes('');
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(term => {
        this.onSearch(term);
      });
  }



}
