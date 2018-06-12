First create a new application and copy the src from the :

/Users/viveksh2/WebstormProjects/MeanStackCode/04_Angular_Class_4/02_finish/ucsc-forms-demo/src

Create a new component for communicating with the abckend. Name it myRecipes.

Add a path for that in the app_module.

Also add a path in the navbar component.

 {path: 'myRecipes', component: MyRecipesComponent },
    <a class="dropdown-item" [routerLink]="['myRecipes']">My Recipes</a>


Now create a express app by :

express cookathonServer


Now that we have two spereate running express and Angular apps,

My experience of 15 hours has taught me that trying to serve an Angular app with Express during development is NOT a good idea.

The proper way is to run Angular and Express as two different apps on two different ports.

Angular will be served on port 4200 and Express on port 3000 as usual.

Then configure a proxy for API calls to Express app.

Add proxy.config.json to root of Angular project:

{
  "/api/*":{
    "target":"http://localhost:3000",
    "secure":false,
    "logLevel":"debug"
  }
}
Open up a new terminal tab and run this command to start Express app:

nodemon [YOUR_EXPRESS_APP.js] --watch server

(YOUR_EXPRESS_APP.js is usually named server.js or app.js. server is a directory where you keep all your Express app files)

Open up a second terminal tab and run this command to start Angular app:

ng serve --proxy-config proxy.config.json

This will ensure that Angular app is rebuilt and browser reloaded when a change is made to any Angular app file. Similarly, Express server will restart when a change is made to any Express app files.

Your Angular app is here: http://localhost:4200/

Watch this video to see how to configure a proxy for your API calls with Angular CLI

NOTE: this setup only applies for development environment. In production, you will want to run ng build and place the Angular app inside a dist directory to be served up by Express. In production, there is only ONE app running - an Express app serving up your Angular app.

