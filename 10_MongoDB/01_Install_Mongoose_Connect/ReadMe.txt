
All right guys in this video we're going to go ahead and install mongoose and we have a little bit of

setup to do as far as connecting to our database and all that.

So let's go ahead and do that.

So we're going to go to the terminal here and let's Control-C to stop the server and we're going to

install mongoose so we can do that with NPM install dash dash save mongoose.

All right.

And if you go to the mongoose documentation say mongoose program or it's actually an odium this.

There's a lot of good documentation here but it can get kind of confusing.

Like it shows you how to create models that shows you the different methods how to find how to how to

save documents and it can get kind of kind of confusing.

So hopefully this course clears some of that stuff up.

But first thing we want to do is connect.

So we're going to start our server back up and make the smaller and we're going to go up to the top

of app J us of our entry point entry file and we're going to create a variable called mongoose.

OK.

Notice how when we install modules it's pretty much the same thing.

We bring them in.

We add any middleware that's needed and then we use them.

So let's say mongoose equals require mongoose.

All right.

And then what we're going to do is connect to our database so we're going to go writes Let's see.

We're going to go right under where we initialize the app variable and let's say connect to mongoose

and to do that we take that mongoose variable and we call DOT connect.

OK so we say connect and then we pass in our database.

Now this could be a remote database from my lab.

OK member we create an M lab account or could be a local database so we're going to start off with just

the local database.

So we're going to say Mongo D-B colon slash slash forward slash local host slash and then whatever you

want to call this database so I'm going to call it just job.

That should be a slash we'll see Viggiano dash dev.

That's the name of my database.

And then we need to put a second parameter of an object and we need to say use Mongul client and set

that to true if we don't do that.

We're going to get some weird error or not error but warning.

All right.

So make sure you add that.

Now this once once we connect we can add a if it responds with a promise.

OK.

So when we use a promise we need to catch it with Daut then.

And we are actually using promises quite a bit with Mongoose and you can use callbacks if you want but

I don't know.

I think promises are a cleaner way of doing it.

So we're going to say Dot then and then and here you could either put a function or you can use an arrow

function which is what I'm going to do.

So we're going to say arrow and then I'm just going to console dot log and we're going to log Lango

D-B connected OK.

So once we connect we'll get this promise back and we're just going to want that we're connected.

Now if there's an error what we can do is remove that semi-colon and say don't catch and then and here

we'll pass in error and we'll set that to console dog log the error.

OK.

So if they can't connect if something happens this will fire off and in a log the error if everything

goes OK in a log.

Mongo D-B connected.

So let's go ahead and save and you can already see down here that it says Mongo DB connected.

OK so every time we connect to the server I'm going to disconnect and then do gnomon and you'll see

that we're connected.

So everything is good up to this point.

Now you may notice this little warning we have it's it's a deprecation warning for mongooses and promis

library.

So there's actually one line of code we can put in to get rid of that.

So we're going to go right above where we connected and we're going to say mapped global promise and

we're just going to mention that this get we'll get rid of warning.

So all we have to do is say mongoose doth promise is equal to global Daut promise.

OK that way we're using global promises instead of the mongooses live default library which is deprecated.

So it's save.

And now if we stop and we go back into our app we shouldn't get that message.

All right so we now have installed mongoose we've connected and we've gotten rid of any stupid warnings

that we don't want.

So in the next video we're going to start to create our model for our ideas.
