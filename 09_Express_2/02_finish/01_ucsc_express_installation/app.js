/**
 * This is the first installation exmaple for expreess.
 * It would give you an error ..since there are no routes installed..
 * @type {createApplication}
 */
const express = require('express');

const app = express();

const port = 5000;


app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});


