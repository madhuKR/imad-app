var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articalOne ={
    title='Artical one | Madhusudana';
    heading='Artical one';
    date='Fbe 25 2018';
    content= '<p>
                  This is my First artical . This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .
              </p>
                <p>
                    This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .vThis is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .
                    
                </p>'
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/artical-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});
app.get('/ui/artical-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});
app.get('/ui/artical-three',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
