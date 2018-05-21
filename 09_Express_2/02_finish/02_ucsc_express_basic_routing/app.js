const express = require('express');

const app = express();

// Index Route
app.get('/', (req, res) => {
    res.send('INDEX');
});

// About Route
app.get('/about', (req, res) => {
    res.send('ABOUT');
});

app.get('/random.text', function (req, res) {
    res.send('random.text')
});


// Hoisting t
app.get('/random.text', function (req, res) {
    res.send('random.text')
});

/**
 * String pattern example...
 */
//This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
});




/**
 * Route Parameters
 *
 */

app.get('/users/:userId/books/:bookId', function (req, res) {
    /**
     * Route path: /users/:userId/books/:bookId
     * Request URL: http://localhost:3000/users/34/books/8989
     * req.params: { "userId": "34", "bookId": "8989" }
     */

    res.send(req.params)
});

/**
 * Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.
 * 1) Route path: /flights/:from-:to
 *      Request URL: http://localhost:3000/flights/LAX-SFO
 *      req.params: { "from": "LAX", "to": "SFO" }
 * 2) Route path: /plantae/:genus.:species
 *      Request URL: http://localhost:3000/plantae/Prunus.persica
 *      req.params: { "genus": "Prunus", "species": "persica" }
 */


/**
 * Catch All Route....
 */

app.get('*', function(req, res) {
    res.send("Did not match anything ... should be error handled!!!!")
});


const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});