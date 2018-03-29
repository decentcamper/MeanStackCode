
Now we learned what Angular is let's build our first angular application since this is the best way of finding out how it works.


Now from this whole course I'm going to use the angular CLI command line interface.


This is simply a tool set which makes creating managing and building your angular applications very simple.


It quickly creates new Angular projects and then we have some commands you can use to build that project for production and so on.


Thats leaves one wondering, Why do I use to CLI and not just import the Angular framework in an existing index.html page because
angular is a very futuristic framework and therefore it uses features like typescript which is a superset of javascript which needs to be compiled before it runs in the browser so it has some extra steps we have to take into account during development and doing that manually can't really be a pain.


That's why it is CLI is really an awesome solution and will be used in scores later in the course.


Though I do have a section where I do explain how you could build your own project from scratch but even then it will be more than just importing a script file.

For CLI what we need is Node.js
Node.JS is a server side language and no word it we're not going to write any server side code.


We simply need no JS because the CLI needs it.

Behind the scenes it does some things with it to build our project and to manage our dependencies like the packages we use like the Angular framework itself.

And it also spins up a little development server which will host our app on our local machine making it easy for us to test it.


So make sure to download the latest version of node J.S. year simply download it and go from the installer should be very straightforward and once you are done go back to this page and here you basically see all the instructions were going to run through in the next seconds together.

01:56.260 --> 02:01.870
So we will need to open a terminal window on Linux and Mac or simply to command line on Windows and

02:01.870 --> 02:07.330
once you did this like this we simply run the following command to install DCL.

02:07.330 --> 02:12.660
I offered you install note Geass that's important on your machine.

02:12.830 --> 02:14.920
NPM that C note package manager.

02:14.950 --> 02:20.230
A little tool which was installed to Gebre with no chips and one of the main reasons why we had to install

02:20.230 --> 02:28.900
no chairs to begin with install then dash G for global to install it globally on your machine at Angular

02:28.990 --> 02:35.850
CLI at Angular's CLI eyes simply as the package we're using the CLI it's all now on Linux and Mac.

02:35.860 --> 02:38.070
You may need to put a pseudo in front of that.

02:38.080 --> 02:43.870
On windows there will not be required and then maybe after being prompted for a password this will run

02:44.010 --> 02:48.130
the installation and download the CLI on your machine and install it.

02:48.220 --> 02:53.560
If you are encountering any problems during that check out the lecture after this one where I will do

02:53.560 --> 02:59.600
some troubleshooting highlight some common problems and how you may debug that and get this to run correctly.

02:59.620 --> 03:01.120
If then it still won't work.

03:01.150 --> 03:02.280
Open a Q and A Fred.

03:02.290 --> 03:03.720
And I'm happy to help.

03:04.030 --> 03:06.230
Well I'll be back once it is finished.

03:06.370 --> 03:10.210
So DCL I insulations successfully finished for me here.

03:10.210 --> 03:14.050
The next step is to create a new angle or project with it.

03:14.140 --> 03:19.500
For this you should navigate in the terminal here into the folder where you want to create this project.

03:19.510 --> 03:20.680
So if the cd command.

03:20.710 --> 03:26.020
Now I already am in the folder I want to create it and then the command to create a new angle or project

03:26.050 --> 03:27.490
as the front end.

03:27.490 --> 03:34.360
That command is available since I installed the Angra CLI ISO ngi will refer to that CLI new to create

03:34.360 --> 03:40.260
a new project and then your project name ultimately named my first app of course.

03:40.260 --> 03:41.610
Choose any name you like here.

03:41.620 --> 03:46.790
There will also be the folder name off the folder which gets created where this project will be stored.

03:46.960 --> 03:52.430
Then simply hit enter to create this new application and all this will take a couple of seconds.

03:52.450 --> 03:55.430
It will basically install all the required dependencies.

03:55.450 --> 04:01.180
For example the angle of FREYBERG itself and it will inform you once it's finished so I'll be back once

04:01.180 --> 04:02.400
this is done.

04:02.500 --> 04:07.150
The creation of the project finished for me and now I can navigate into this newly created folder with

04:07.150 --> 04:07.600
CD.

04:07.600 --> 04:12.070
My first app and here we can run this project with ngi serve.

04:12.070 --> 04:18.490
What this will do is it will build all our source code as or uses typescript which needs to be compiled

04:18.490 --> 04:19.360
to javascript.

04:19.360 --> 04:24.010
More on this in the late lecture and then heads will spin up a little development server running at

04:24.010 --> 04:27.100
this address here where we can see are running.

04:27.160 --> 04:31.290
Why do we need a server and don't simply double click the index HDMI file.

04:31.480 --> 04:37.360
Well due to the nature how anger works it loads a lot of resources dynamically once it runs and we can

04:37.360 --> 04:41.040
only simulate how it would really look like on a real server.

04:41.140 --> 04:46.570
If we use th UDP protocol which we don't use when double clicking on a file.

04:46.660 --> 04:52.690
So with that since we know that it will run at localhost four thousand two hundred we can simply wisit

04:52.690 --> 04:59.080
this page by entering it in our browser and we should see app works which basically is some dummy text

04:59.080 --> 05:05.830
created by DC lie showing us deaded and x that is how we can set it up in the next lecture.

05:05.890 --> 05:11.350
Let's edit this ep and dive into it and see what the CLI exactly did create for us.
