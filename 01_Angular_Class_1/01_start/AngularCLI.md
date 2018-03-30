---


---

<h1 id="angular-class-1--angular-cli">Angular Class 1- Angular CLI</h1>
<p>Now we learned what Angular is let’s build our first angular application since this is the best way of finding out how it works.<br>
Now from this whole course I’m going to use the angular CLI command line interface.</p>
<h1 id="whats-angular-cli">What’s Angular CLI:</h1>
<p>This is simply a tool set which makes creating managing and building your angular applications very simple.</p>
<p>It quickly creates new Angular projects and then we have some commands you can use to build that project for production and so on.</p>
<p>Thats leaves one wondering,<br>
<strong>Why do I use to CLI and not just import the Angular framework in an existing index.html page??</strong><br>
Well thats because  angular is a very futuristic framework and therefore it uses features like <em><strong>typescript</strong></em> which is a superset of javascript which needs to be compiled before it runs in the browser so it has some extra steps we have to take into account during development and doing that manually can’t really be a pain.</p>
<p>That’s why it is CLI is really an awesome solution and will be used in scores later in the course.</p>
<h2 id="installing-angular-cli">Installing Angular CLI:</h2>
<pre><code>sudo npm install -g @angular/cli
</code></pre>
<h2 id="upgrading-angular-cli">Upgrading Angular CLI:</h2>
<p>Run the below commands - only use “sudo” on Mac/ Linux.</p>
<pre><code>sudo npm uninstall -g angular-cli @angular/cli
npm cache clean --force
sudo npm install -g @angular/cli
</code></pre>
<h2 id="creating-a-new-project-using-angular-cli">Creating a new project using Angular CLI:</h2>
<pre><code>ng new &lt;project-name&gt;
</code></pre>
<p>cd to the directory of newly created project.</p>
<pre><code>ng serve 
</code></pre>
<p>This command would serve the project on a small embedded Jetty server on the port 4200.</p>

