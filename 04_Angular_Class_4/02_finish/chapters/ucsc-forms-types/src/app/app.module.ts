import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeFormComponentComponent } from './recipe-form-component/recipe-form-component.component';

import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponentComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
