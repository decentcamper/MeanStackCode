import { Injectable } from '@angular/core';
import {Recipes} from "../models/recipes";
import {RecipeDetails} from "../models/recipe-details";

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipeDetailsService {

  appID ='180dee57';
  appKey ='4f5cf80a4658040d1ff64a158b58c978';
  apiRoot: string = `https://api.edamam.com/search`;

  loading:boolean;


  constructor(private httpClient: HttpClient) {
    this.loading=false;
  }

  /**
   * This is the method for fetching via the Promises.
   * It requires the CORS workaround.
   * @param term
   * @returns {Promise<any>}
   */
  getRecipesThroughPromise(term) : Promise<any>{
    return new Promise((resolve, reject) => {
      let searchTerm = term || 'protein';
      /**
       *First we construct a url which will instruct iTunes to perform a search for us, like so:
       */
      let apiURL = `${this.apiRoot}?q=${searchTerm}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=20&calories=591-722&health=vegetarian`;

      /**
       * Then we make the GET request to that URL
       */
      this.httpClient.get(apiURL)
      /**
       * Since the httpClient returns an observable, it needs to be converted to a promise....
       */
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
  }


  getRecipesThroughObservables(term): Observable<Object>{
    let searchTerm = term || 'protein';
    let apiURL = `${this.apiRoot}?q=${searchTerm}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=20&calories=591-722&health=vegetarian`;
    return this.httpClient.get(apiURL);
  }

  getMyRecipesThroughObservables(): Observable<Object>{
    return this.httpClient.get('/api/get/myRecipes');
  }


  deleteMyRecipeThroughObservables(recipeLabel): Observable<Object>{
    return this.httpClient.delete(`/api/delete/recipe/${recipeLabel}`);
  }




}
