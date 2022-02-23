'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger')
const cors = require('cors');
const validator=require('./middleware/validator');
const errorhandler=require('./error-handlers/500');
const notfoundpage=require('./error-handlers/404');

app.use(express.json());
app.use(cors());



app.use(logger);//set it up to run at the application level for all routes

app.get('/', (req, res) => {
    res.send('Welcome To My Page')
    console.log("im here")
});


//Expects a query string from the user with a “name” property

app.get('/person',validator,(req, res) => {
    res.json({ name: req.query.name })
    console.log( req.query.name);
});




app.get(errorhandler);
app.get('*',notfoundpage);



//the functions 
function start(port) {
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    })
}


module.exports = {
    app: app,
    start: start
}
