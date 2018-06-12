
All right.

So as I mentioned before when you use Mongo D-B which is a no sql database schema lists meaning that

you don't have to define a certain schema on the database level.

However it's good practice to define the schema on your application level.

So that's what mongooses allows us to do is we can define a schema in our application.

All right.

So what we're going to do is we're going to go over to our files over here and we're going to create

in the root directory a folder called models.

All right.

And inside models we're going to create a new file and we're going to call it recipe with a capital R.

Yes.

Hey it's always good practice to capitalize your model names.

You know even the file name.

So what we're going to do is bring in mongoose.

So conchs mongoose equals require mongoose.

All right.

And then we're going to say Conte's schema and we're going to bring that in from mongooses Daut schema.

All right.

And then we're going to create our schema so to do this we create a variable called Let's call it idea

schema.

We're using Pascal case so capital every word should be capitalized and then we're going to set it to

a new schema.

OK.

And then inside the schema we pass in an object with the different fields that we want.

So for our video ideas what do we want we want the title.

OK so this is going to be mapped to an object that has a type which is going to be a string.

OK we're also going to say that we want this to be required so will say required.

True.

All right.

In addition to a title it's going to have details.


And then one more thing we're going to have is a date.

All right.

So date we're going to say type will be date and then we're going to set the default.

Here you can set defaults and it's going to be set to date right now so whatever the current time stamp

is that's what's going to get to it that's what's going to get put in here automatically.

We're not even going to have to worry about inserting the data.

It will do it on its own.

All right.

Now once we do that once we set up our schema we can just say mongoose Daut model case are going to

create our model and we're going to call it ideas and it's going to be connected to the idea schema

and that's it.

OK.

So I'll save that.

And there we go there's our schema or I'm sorry our model now to use this.

Okay we're going to want to use this in some routes which we haven't created yet but let's go ahead

and go to app J.S. And let's bring this model let's bring the model into this file so that we can at

least use it when we need to.

So we'll go under where we connected to mongoose and we'll save load idea model.

So to do this we're going to first require the file that we just created.

So we're going to say require dot slash models dot meaning that we're looking in the current directory

that we're in.

Okay we're in app J.S. Right now so we're looking in the current directory into models and then we want

to look at idea.

Okay we don't need to put dot J as just the name of the file.

And then after that we just want to load the model into a variable so we're going to see Konst idea

ever going to set that to mongoose Daut model

mongoose model.

And then we're going to pass the name of the model which is ideas.

All right.

And then we can use that to get downhill quickly in error.

Whoops forgot the L.

All right.

So now we created the model and we brought it in and it's ready to be used.

So what we're going to do in the next video is we're going to start to create some more routes.

OK what I want to do is have a form that we can use to add a video idea and then save that to the database

using the idea model.

All right.

