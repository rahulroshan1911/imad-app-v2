var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
    title:'Article One',
    heading:'Article one',
    content:`<p>
            Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.
        </p>
        <p>
            Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.Thos is the first aparagraph.
        </p>`
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


app.get('/article-one',function (req,res){
res.send(createtemplate(article));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
