// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var htmldb = require(__dirname + '/public/db.js');
app.use(require('express-status-monitor')());

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('lua/docs'));



// http://expressjs.com/en/starter/basic-routing.html

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/lua-docs', function(request, response) {
  response.sendFile(__dirname + '/lua/docs/index.html');
});

app.get('/lua-docs-readme', function(request, response) {
  response.sendFile(__dirname + '/lua/docs/readme.html');
});

app.get('/offlineedit', function(request, response) {
  response.sendFile(__dirname + '/views/offlineedit.html');
});

app.get('/donate', function(request, response) {
  response.sendFile(__dirname + '/views/donations.html');
});

app.get('/host.html', function(request, response) {
  response.sendFile(__dirname + '/views/hosting.html');
});

app.get('/sw.js', function(request, response) {
  response.sendFile(__dirname + '/sw.js');
});

app.get('/changelog', function(request, response) {
  response.sendFile(__dirname + '/views/changelog.html');
});

app.get('/changelog.html', function(request, response) {
  response.sendFile(__dirname + '/views/changelog.html');
});

app.get('/edit', function(request, response) {
  response.sendFile(__dirname + '/views/editor.html');
});

app.get('/editor.html', function(request, response) {
  response.sendFile(__dirname + '/views/editor.html'); 
});

app.get('/secret', function(request, response) {
  response.sendFile(__dirname + '/views/secret.html'); 
});

app.get('/secret.html', function(request, response) {
  response.sendFile(__dirname + '/views/secret.html'); 
});

app.get('/editor.html', function(request, response) {
  response.sendFile(__dirname + '/views/edit.html'); 
});

app.get('/html-docs.html', function(request, response) {
  response.sendFile(__dirname + '/views/html-docs.html'); 
});
app.get('/html-docs', function(request, response) {
  response.sendFile(__dirname + '/views/html-docs.html'); 
});

app.get('/home.html', function(request, response) {
  response.sendFile(__dirname + '/views/home.html'); 
});

app.get('/home', function(request, response) {
  response.sendFile(__dirname + '/views/home.html'); 
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// HOSTING

app.get('/host/' + 'hellowebpages', function(request, response) {
  response.sendFile(__dirname + '/views/host/hellowebpages/'); 
});

// host end

app.get('/host/', function(request, response) {
  response.sendFile(__dirname + '/views/hosting.html'); 
});

app.get('/host/' + '*', function(request, response) {
  response.sendFile(__dirname + '/views/hoster404.html'); 
});

app.get('/e/' + '*', function(request, response) {
  response.sendFile(__dirname + '/views/editor.html'); 
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/views/404.html');
});

