
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


So we will need to open a terminal window on Linux and Mac or command line tools on Windows and once you did this like this we simply run the following command to install CLI:


sudo npm install -g @angular/cli



NPM that is the node package manager.
    A little tool which was installed  with NODEJS and one of the main reasons why we had to install NODEJS to begin with.
     
     
- G for global to install it globally on your machine.


NPM would download the CLI on your machine and install it.


Once the CLI is successfully installed , the next step is to create a new angular project with it.


For this you should navigate in the terminal here into the folder where you want to create this project.


CD to the folder that you want to create the project.


Now I already am in the folder I want to create it and then the command to create a new angular project

ng new ucsc-first-app



That command is available since I installed the Angular CLI ISO ngi will refer to that CLI new to create 

a new project and then your project name ultimately named my first app of course.


Choose any name you like here.


There will also be the folder name off the folder which gets created where this project will be stored.


Then simply hit enter to create this new application and all this will take a couple of seconds.


It will basically install all the required dependencies.


For example the angular framework itself and it will inform you once it's finished so I'll be back once this is done.


The creation of the project finished for me and now I can navigate into this newly created folder with CD.


My first app and here we can run this project with ngi serve.


What this will do is it will build all our source code as or uses typescript which needs to be compiled to javascript.


More on this in a later lecture and then heads will spin up a little development server running at this address here where we can see are running.


Why do we need a server and don't simply double click the index.html file.


Well due to the nature how ANGULAR works it loads a lot of resources dynamically once it runs and we can only simulate how it would really look like on a real server.


If we use th HTTP protocol which we don't use when double clicking on a file.


So with that since we know that it will run at localhost four thousand two hundred we can simply visit this page by entering it in our browser and we should see app works which basically is some dummy text


created by DC lie showing us deaded and x that is how we can set it up in the next lecture.


Let's edit this app and dive into it and see what the CLI exactly did create for us.
