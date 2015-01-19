var express = require('express');
var app = express();
var MobileDetect = require('mobile-detect');

app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public'));

app.route('/', require('./routes/index')(app));

console.log('app start.');

app.listen(3000);
