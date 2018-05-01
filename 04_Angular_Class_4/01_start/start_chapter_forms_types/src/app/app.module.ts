import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'



const routes:Routes = [
  {path:'templateDriven', component : FormTemplateDrivenComponent},
  {path:'modelDriven', component : FormModelDrivenComponent},
  {path: '**', component: FormTemplateDrivenComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormModelDrivenComponent,
    NavBarComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
