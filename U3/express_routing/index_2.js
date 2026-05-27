var express = require('express');
var app = express();

var PORT = 3000;

// POST Request
app.post('/', function(req, res) {
    console.log('Got a POST request for the homepage');
    res.send('Post Page');
});

// DELETE Request
app.delete('/del_student', function(req, res) {
    console.log('Got a DELETE request for the delete page');
    res.send('The Page got deleted');
});

// GET Request
app.get('/enrolled_student', function(req, res) {
    console.log('Got a GET request from enrolled student page');
    res.send('I am enrolled student');
});

// Server
var server = app.listen(PORT, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});