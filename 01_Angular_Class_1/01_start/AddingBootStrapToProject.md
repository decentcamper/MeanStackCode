---


---

<h1 id="styling-the-project-using-bootstrap">Styling the Project Using Bootstrap</h1>
<p>With <a href="https://getbootstrap.com/">Bootstrap</a>, you can build responsive, mobile-first projects on the web with the world’s most popular front-end component library.</p>
<p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
<h2 id="adding-bootstrap-as-a-dependency">Adding Bootstrap As a Dependency:</h2>
<pre><code>npm install bootstrap --save
</code></pre>
<p>This would add bootstrap as a dependency to the node_modules and would also make an entry in the package.json which tracks our dependencies.</p>
<h2 id="adding-bootstrap-css-to-the-project">Adding Bootstrap css to the Project:</h2>
<ol>
<li>
<p>Open the angular-cli.json located in the root of the project</p>
</li>
<li>
<p>Search for the entry <strong>styles</strong> which is an array.</p>
</li>
<li>
<p>In this array make an entry for the bootstrap.css.</p>
</li>
<li>
<p>Restart the Server.</p>
<p>E.g.:<code>"styles": [ "styles.css", "../node_modules/bootstrap/dist/css/bootstrap.css" ]</code></p>
</li>
</ol>

