import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeFormComponentComponent } from './recipe-form-component/recipe-form-component.component';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

import {ReactiveFormsModule} from "@angular/forms";
import { FormReactiveDrivenComponent } from './form-reactive-driven/form-reactive-driven.component';


const routes:Routes = [
  {path:'templateDriven', component : FormTemplateDrivenComponent},
  {path:'modelDriven', component : FormModelDrivenComponent},
  {path:'reactiveDriven', component : FormReactiveDrivenComponent},
  {path: '**', component: FormTemplateDrivenComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponentComponent,
    FormTemplateDrivenComponent,
    FormModelDrivenComponent,
    NavBarComponent,
    FormReactiveDrivenComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
