import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeFormComponentComponent } from './recipe-form-component/recipe-form-component.component';

import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponentComponent
  ],


  imports: [
    BrowserModule,
    FormsModule
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
