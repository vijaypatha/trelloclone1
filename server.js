//modules and variables

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//middleware

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//data

var lists = [
  {
  name: 'personal', tasks: ['sleep', 'eat']
  },
  {
  name: 'school', tasks: ['homework', 'study for the test']
  },
  {
  name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face']
  },
  {
  name: 'DevMTn', tasks: ['understand Connections', 'repeat over', 'understand the connections']
  }
];

//fetch data

//fetch data - provide the data

app.get('/api/data',function(req,res){
  res.send(lists);
});


//fetch data - modify
// Goal: add tasks to the four indexes (personal, school, work and ...) in the data.
// to do that I will be modifying

app.put('/api/data/:id',function(req,res){
 // /api/data is the url and :id is a varaible (parameter)

  var id = req.params.id; // more clarity

  lists[id].tasks.push(req.body.text);
  // data[id] === myArray[0]
 //task is an array in the array data and hence method PUSH

  console.log(req.body.text); //what is req.body.text

  res.send(req.body.text);

});//.put






//listen

app.listen(port,function(){
  console.log('Vijay Says Node is listening on port ' + port);
});
