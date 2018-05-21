WEBVTT

00:00.660 --> 00:00.920
All right.

00:00.930 --> 00:05.640
So before we move any further I want to talk a little bit about middleware which is kind of a difficult

00:05.640 --> 00:10.490
concept to understand especially if you're coming from like a peach background.

00:10.530 --> 00:17.430
So this is the May or the documentation page for Express middleware and it says express a routing middleware

00:17.580 --> 00:23.730
web framework that has minimal functionality of its own and express application is essentially a series

00:23.730 --> 00:30.900
of middleware function calls so middleware that they're basically just functions that have access to

00:30.900 --> 00:37.140
this request and response object and then middleware functions can do things like execute code.

00:37.230 --> 00:43.470
They can make changes to the request and response objects they can and the request response cycle and

00:43.470 --> 00:46.940
they can call the next middleware function in the stack.

00:46.950 --> 00:53.290
So I think the best way to show you or to explain this is to create our own little piece of metal Ware.

00:53.490 --> 01:03.600
So let's go over here and let's go above our roads and put a comment in here and see how the middleware

01:03.600 --> 01:04.420
works.

01:04.470 --> 01:12.510
And we're going to say at DOT use and by the way when you install modules like let's say we're going

01:12.510 --> 01:17.790
to install handlebars or express handlebars which is a template engine and that has its own middleware

01:17.790 --> 01:21.240
that you have to include in the app js file.

01:21.240 --> 01:26.910
What does it have to be in the object file but it usually is when we install body parser to deal with

01:26.910 --> 01:30.710
form data that has its own middleware that we have to install.

01:30.870 --> 01:36.110
All right so you're going to see this app don't use quite a bit but let's go ahead and say app don't

01:36.130 --> 01:41.610
use and we're going to pass in a function.

01:41.610 --> 01:41.960
All right.

01:41.970 --> 01:46.860
And then this function is going to take requests response and next.

01:46.970 --> 01:47.600
OK.

01:47.760 --> 01:51.960
So we now have access to this request in response object.

01:51.960 --> 02:01.040
Now all I'm going to do is go ahead and just console larg console log and let's put in the time.

02:01.050 --> 02:04.920
So we'll just console log date Daut now.

02:05.070 --> 02:07.130
OK that will get us the current time.

02:07.140 --> 02:09.710
That should be a door.

02:10.150 --> 02:13.230
And then we just want to call the next piece of middleware to run.

02:13.230 --> 02:15.630
So we do that by just saying next.

02:15.940 --> 02:21.100
So let's go ahead and save that and now I'm going to go over here I'm just going to reload my About

02:21.100 --> 02:25.210
page and notice every time I reload down here it's Konsole logging the time.

02:25.240 --> 02:27.160
OK the time stamp.

02:27.160 --> 02:32.830
So we've actually created our own middleware and we do have access to this request and response.

02:32.830 --> 02:37.060
So for instance I want to say request name

02:40.780 --> 02:46.380
equals and put in my name here.

02:46.990 --> 02:50.140
And so what I did is I set a request variable.

02:50.140 --> 02:51.640
Now this request variable.

02:51.640 --> 03:00.970
Now I can access throughout our application so if we go down to the index and let's say you want to

03:00.970 --> 03:09.010
just console the log and say request dog name.

03:09.010 --> 03:14.290
All right and let's comment out the time so we don't see that anymore but let's go ahead and save if

03:14.290 --> 03:15.060
I reload about.

03:15.060 --> 03:20.650
Nothing happens but if we go to the index route you'll see that it's logging Brad traverse.

03:20.680 --> 03:22.040
Every time I reload.

03:22.330 --> 03:27.440
OK so we had access to that request object we added something to it.

03:27.550 --> 03:29.910
And now we have access to it in our route.

03:30.160 --> 03:30.450
All right.

03:30.450 --> 03:35.270
So this is how like authentication works with passport which we're going to get into much later.

03:35.380 --> 03:36.300
It will.

03:36.370 --> 03:43.660
Once you are again it'll put your user information from the session into request dot user and then you

03:43.660 --> 03:45.510
can access that from anywhere.

03:45.670 --> 03:53.630
OK so that's essentially how a lot of different node modules will work with Express.

03:53.650 --> 03:54.030
All right.

03:54.030 --> 03:58.840
And we can do whatever we want with this name and we can we can send it to the browser from wants if

03:58.840 --> 04:03.800
we say read send requests the name and we reload we get Brad Travers.

04:04.090 --> 04:10.270
All right so I just wanted to give you just a little example to try and explain middleware just a little

04:10.270 --> 04:15.720
bit because it is a kind of a confusing subject but we're not going to have to really deal with it.

04:15.730 --> 04:20.680
We're not going to write out any custom middleware we're just going to be including middleware for third

04:20.680 --> 04:24.000
party modules that we're going to be using.

04:24.010 --> 04:24.310
All right.

04:24.310 --> 04:26.430
So I'm actually going to clear this stuff out.

04:26.440 --> 04:31.200
I would just undo this because this is this isn't part of our application.

04:31.200 --> 04:32.460
I just wanted to show you that.

04:32.480 --> 04:33.740
But that's it.

04:33.750 --> 04:35.850
So go ahead and save that.

04:35.850 --> 04:37.590
And there you go.

04:37.590 --> 04:37.820
All right.

04:37.830 --> 04:42.570
So in the next video we're going to get into template engines we're actually going to be using handlebars

04:42.570 --> 04:46.800
which is in my opinion the best template engine available for node.

04:46.950 --> 04:49.320
But we'll talk about some of the other ones as well.

04:49.320 --> 04:51.320
And I will see you in the next video.
