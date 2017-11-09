const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Router = require('./routes');

const MLAB_USER=process.env.TEST_USER_NAME;
const MLAB_PASSWORD=process.env.TEST_USER_PASSWORD;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + MLAB_USER  + ':' + MLAB_PASSWORD + '@ds151955.mlab.com:51955/dev-base-backend');

const db = mongoose.connection;


app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(cors());
app.use(Router);
// ref : https://stackoverflow.com/questions/45503253/import-data-from-file-json-with-mongoose

app.get('/', (req, res, next)=>{
    res.send('Welcome to dev base.')
})
app.use((req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

});

// For better error handling on the application.
app.use((err, req, res, next)=> {
    res.status(422).send({error : "An Error Occurred"})
});



app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
});