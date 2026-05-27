var express= require('express');
var app=express();
var PORT=3000;

app.post('/', function(req, res){
    console.log('Got a post request for the homepage');
    res.send('Post Page');
});

app.delete('/del_student', function(req, res){
    console.log('Got a delete request for the delete page');
    res.send('The Page got deleted');
});

app.get('/enrolled_student', function(req, res){
    console.log('Got a get request from enrolled student page');
    res.send('I am enrolled student');
});

var server= app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log('Example app listening at http://%s:%s',host,port)
})