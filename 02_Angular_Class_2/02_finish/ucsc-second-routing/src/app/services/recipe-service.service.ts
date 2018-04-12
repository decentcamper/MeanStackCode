import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {RecipeItem} from "../models/RecipeItem";
import {RecipeDetail} from "../models/RecipeDetail";


@Injectable()
export class RecipeServiceService {
 appID ='180dee57';
 appKey ='4f5cf80a4658040d1ff64a158b58c978';

 apiRoot: string = `https://api.edamam.com/search`;
  results: RecipeItem [];
  recipeDetails : RecipeDetail [];


  constructor(private jsonp: Jsonp) {
    this.results = [];


  }

  searchRecipes(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let searchTerm = term || 'protein';
      let apiURL = `${this.apiRoot}?q=${searchTerm}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=20&calories=591-722&health=vegetarian&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
          .toPromise()
          .then(
              res => { // Success
                this.results = res.json().hits.map(item => {
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
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }

  fetchRecipeDetail(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let searchTerm = term.replace("#", "%23");
      let apiURL = `${this.apiRoot}?r=${searchTerm}&app_id=${this.appID}&app_key=${this.appKey}&callback=JSONP_CALLBACK`;
      console.log(apiURL);
      this.jsonp.request(apiURL)
          .toPromise()
          .then(
              res => { // Success
                this.recipeDetails = res.json().map(item => {
                  return new RecipeItem (
                      item.uri,
                      item.label,
                      item.image,
                      item.source,
                      item.shareAs,
                      item.url,
                      item.calories,
                      item.totalWeight,
                      item.totalTime,
                      item.healthLabels

                  );
                });
                resolve(this.recipeDetails);
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }

}
