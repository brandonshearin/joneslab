var express = require('express'),
    app = express();
    
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public/'));