var express=require('express');
var app=express();

app.get('/', function(req,res){
	res.send('Hello Wolrd');
});

app.get('/speak', function(req,res){
	res.send('<h1> Speaking... </h1>');
});

app.get('/speak/:animal', function(req,res){
	var sounds= {
		cow:'MOO',
		dog:'WOOF',
		cat:'MEOW',
	};
	var animal = req.params.animal.toLowerCase();
	var saying = sounds[animal];
	if(saying == undefined)
		saying = 'nothing';
	res.send('The' + animal + 'says' + saying);
});
			
app.get('*', function(req,res){
	res.send('<h2 style="color: red"> 404 Page not Found</h2>');
});

var express = app.listen(process.env.PORT || 3000, function(){
	console.log('Server is running');
});
