
Build the angular application using the command [ng build]
Copy and paste the dist directory in the public directory.
Copy and paste the following lines:


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

and also in the index.js:


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));;
});


