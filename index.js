const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const morgan = require('morgan');

app.use(morgan('tiny'));



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));

app.use('/img', express.static(path.resolve(__dirname, "assets/img")));

app.use('/js', express.static(path.resolve(__dirname, "assets/js")));



app.listen(3000, function() {
    console.log('listening on 3000')
  });
app.get('/', function(req, res) {
    res.render('index.ejs', {})
  });
app.post
