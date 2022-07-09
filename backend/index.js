let express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./models/Model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.25.16.1:27017/Tododb');
//mongodb://AzureDiamond:hunter2@172.25.16.1:27017/Tododb
// mongodb%3a%2f%2fAzureDiamond%3ahunter2%40172.25.16.1%3a27017%2fTododb
//Tododb
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./routes/Routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);