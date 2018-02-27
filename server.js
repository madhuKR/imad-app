var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
var articles = {
 'articleOne' : {
      title:'Articel one|madhusudan',
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
  'articleTwo' : {title:'Articel one|madhusudan',
      heading:'Artical second',
      date:'24 FEB 2018',
      content: `  
               <p>
                  This is my Content of my second artical This is my Content of my second artical This is my Content of my second artical 
                  This is my Content of my Frist artical  This is my Content of my Frist artical This is my Content of my Frist artical 
                    
                </p>
                `
                
     },
 'articleThree': { title:'Articel three|madhusudan',
      heading:'Artical three',
      date:'23 FEB 2018',
      content: `  
               <p>
                  This is my Content of my third artical This is my Content of my third artical This is my Content of my Frist artical 
                  This is my Content of my Frist artical  This is my Content of my Frist artical This is my Content of my Frist artical 
                    
                </p>
               `
                
    }
};


function createTemplate (data) {
    
       var title=data.title;
       var date=data.date;
       var heading=data.heading;
      var content=data.content;
  
     var htmlTemplate=`
  <html>
    <head>
        <title>
            ${title}
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
              ${date}  
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
app.get('/:articleName', function (req,res){
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
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
