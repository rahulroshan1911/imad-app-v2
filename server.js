var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
'article-one':{
    title:'Article One',
    heading:'Article one',
    content:`<p>
    rahul  rodsdas.dsk.ads.adsadas.dmas
            Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.
        </p>
        <p>
            Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.
        </p>`
},
   'article-two':{
    title:'Article two',
    heading:'Article 2',
    content:`<p>
    this is atricle 2
        </p>`
}
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
    `<html>
      <head>
          <title>
              ${title}
          </title>
      </head>  
        <body>
            <div>
                <a href="/">Home</a>
            </div>
            <h1>
                ${heading}
            </h1>
            ${content}
        </body>
    </html>`
    ;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;
res.send(createtemplate(article[articleName]));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
