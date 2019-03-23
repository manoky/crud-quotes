var express = require('express');
var bodyParser = require('body-parser');
import serverRender from './serverRender';
import api from './api';



var app = express();
var port = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/api', api)


app.get('*', (req, res) => {
  res.render('index')
});


app.listen(port, function() {
  console.log("App is running on port " + port)
});




