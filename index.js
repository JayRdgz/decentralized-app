const express = require('express');
const app     = express();
const path    = require('path');
const pug     = require('pug');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const nodemailer = require('nodemailer');
const consolidate = require('consolidate');

// -------------------------------------------------
/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000');
let db = mongoose.connection;

db.once('open', function(){
    console.log('connected to mongodb');
})

db.on('err', function(err) {
    console.log(err);
})*/
// -------------------------------------------------


// view engine setup
app.engine('exphbs', exphbs({
    extname: 'exphbs',
    dafaultLayout: 'index',
    layoutDir: __dirname + '/views/handlebars'
}));
app.set('view engine', 'exphbs');



// body parse middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//app.use('/css', express.static(path.join(__dirname, 'css')));


/*
app.use('/css', function(req, res, next) {
     oonsole.log(req.url);
    next();
})
*/
app.use('/css', express.static('css'));

app.set('views', path.join(__dirname, 'views'));

app.engine('engine', consolidate.pug);
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home', {
        page_title: 'Coop Mining Farms'
    });
});


app.listen(3000, function() {
    console.log('server running');
});
