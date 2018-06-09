const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
require('./env-load');

const app = express();

const PORT = process.env.PORT || 8000;

debugger;

// Set app up to parse body of requests with bodyParser
app.use(bodyParser.urlencoded({extended: true}));


// ROUTES
require('./app/routes')(app, {});

app.get('/', (req, res) => res.send('Hi (get request)'))
app.post('/', (req, res) => res.send('Hi (post request)'))
app.put('/', (req, res) => res.send('Hi (put request)'))
app.delete('/', (req, res) => res.send('Hi (delete request)'))


app.listen(PORT, () => {
    console.log(`\nServer now listening on port ${PORT}.\n`);
})
