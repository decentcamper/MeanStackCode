import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import {Routes, RouterModule} from "@angular/router";
import { ImageOverlayDirective } from './directives/image-overlay.directive';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'about', component: AboutComponent },
  {path: 'addRecipe', component: AddRecipeComponent },
  {path: 'myRecipes', component: MyRecipesComponent },
  {path: 'recipeDetail/:recipeID', component: RecipeDetailComponent },
  {path: '**', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RecipeDetailComponent,
    RegisterComponent,
    SearchComponent,
    AboutComponent,
    ImageOverlayDirective,
    AddRecipeComponent,
    MyRecipesComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
