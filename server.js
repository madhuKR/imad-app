var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
 var articals ={
'artical-one' : {
  title:'Artical one|madhusudan',
  heading:'Artical one',
  date:'5 FEB 2018',
  content: `  
               <p>
                  This is my Content of my Frist artical This is my Content of my Frist artical This is my Content of my Frist artical 
                  This is my Content of my Frist artical  This is my Content of my Frist artical This is my Content of my Frist artical 
                    
                </p>
                <p>
                  This is my Content of my Frist artical This is my Content of my Frist artical This is my Content of my Frist artical 
                  This is my Content of my Frist artical  This is my Content of my Frist artical This is my Content of my Frist artical 
                    
                </p>
                <p>
                  This is my Content of my Frist artical This is my Content of my Frist artical This is my Content of my Frist artical 
                  This is my Content of my Frist artical  This is my Content of my Frist artical This is my Content of my Frist artical 
                    
                </p>`
                

},
 'artical-two':{ title:'Artical two|madhusudan',
  heading:'Artical Two',
  date:'23 FEB 2018',
  content: `    <p>
                   This is my First artical . This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .This is my First artical .
                </p>
                
                 `
},
' artical-three':{title:'Artical three|madhusudan',
  heading:'Artical three',
  date:'26 FEB 2018',
  content: `    <p> This is my content for my Thrid artical </p> `
 }
    
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date= data.date;
    var content=data.content;
    
  var htmlTemplate=`<html>
    <head>
        <title>
            ${titlr}
        </title>
        <meta name="viewport" content= "width=device-width,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class = 'Container'>
            <a herf='/'>Home</a>
        </div >
        
        <h3>
            ${heading}
            
            </h3>
            <div>
                
            
            <div>
              feb 23 2018  
            </div>
            <div>
                ${content}
            </div>
            </div>
    </body>
    
</html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/articalone',function(req,res){
    //articalName=artical-one
    //articals[articalName]={} content of artical one
   // var articalName=req.params.articalName;
    res.send(createTemplate(articalOne));
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
