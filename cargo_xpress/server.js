// load the things we need
var express = require('express');
var app = express();


console.log(__dirname)
// console.log(express.static("public").toLocaleString())

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/img-rev-slider', express.static(__dirname + 'public/img-rev-slider'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/css/views/cargo_xpress', express.static(__dirname + 'public/fonts'))
app.use('/rs-plugin', express.static(__dirname + 'public/rs-plugin'))

// app.use((req, res, next) => '/mediana_cargo_xpress')
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});
// index page
app.get('/index.ejs', function(req, res) {
    res.render('index');
});

// about page
app.get('/about.ejs', function(req, res) {
    res.render('about');
});

// about page
app.get('/contact.ejs', function(req, res) {
    res.render('contact');
});
// about page
app.get('/info.ejs', function(req, res) {
    res.render('info');
});
// about page
app.get('/ports.ejs', function(req, res) {
    res.render('ports');
});
// convert page
app.get('/convert.ejs', function(req, res) {
    res.render('convert');
});

app.get('/services.ejs', function(req, res) {
    res.render('services');
});

app.listen(8083);
console.log('http://localhost:8083 is the magic port');
