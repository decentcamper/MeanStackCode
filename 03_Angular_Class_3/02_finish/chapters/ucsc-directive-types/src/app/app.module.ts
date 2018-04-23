import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/nav-bar/nav-bar.component';
import { ComponentDirectiveComponent } from './directiveDemo/component-directive-demo/component-directive/component-directive.component';
import { NgForDirectiveComponent } from './directiveDemo/structural-directive-demo/ng-for-directive/ng-for-directive.component';
import {Routes, RouterModule} from "@angular/router";
import { NgIfDirectiveComponent } from './directiveDemo/structural-directive-demo/ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './directiveDemo/structural-directive-demo/ng-switch-directive/ng-switch-directive.component';
import { NgModelDirectiveComponent } from './directiveDemo/attribute-directive-demo/ng-model-directive/ng-model-directive.component';
import { NgClassDirectiveComponent } from './directiveDemo/attribute-directive-demo/ng-class-directive/ng-class-directive.component';
import { NgStyleDirectiveComponent } from './directiveDemo/attribute-directive-demo/ng-style-directive/ng-style-directive.component';

const routes:Routes = [
  {path:'structural/ngForDemo', component : NgForDirectiveComponent},
  {path:'structural/ngIfDemo', component : NgIfDirectiveComponent},
  {path:'structural/ngSwitchDemo', component : NgSwitchDirectiveComponent},
  {path:'attribute/ngModelDemo', component : NgModelDirectiveComponent},
  {path:'attribute/ngClassDemo', component : NgClassDirectiveComponent},
  {path:'attribute/ngStyleDemo', component : NgStyleDirectiveComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ComponentDirectiveComponent,
    NgForDirectiveComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgModelDirectiveComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
