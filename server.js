var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var config = require('./config.js');
var cors = require('cors');
var session = require('express-session')


var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(cors(corsOptions));
var corsOptions = {
  origin: 'http://localhost:8999'
}

app.use(session({ secret: config.sessionSecret, resave: true, saveUninitialized: true }));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getProfiles)

var port = 3000;
app.listen(port, function () {
  console.log('listening to port', port);
});
