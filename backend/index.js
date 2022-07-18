let express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./models/Model'), //created model loading here
bodyParser = require('body-parser');
const cors = require('cors')

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.56.1:27017/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


let routes = require('./routes/Routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);