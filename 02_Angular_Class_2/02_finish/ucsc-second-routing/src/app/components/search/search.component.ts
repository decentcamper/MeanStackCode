import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from "../../services/recipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl:'search.component.html'
})
export class SearchComponent {
  private loading: boolean = false;

  constructor(private recipeService: RecipeServiceService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['term']) {
        this.doSearch(params['term'])
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.recipeService.searchRecipes(term).then(_ => this.loading = false)
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term: term}]);
  }
}

