const console = require('console')
const express = require('express');
const { clearScreenDown } = require('readline');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');

});
app.get('/index', function (req, res) {
    res.render('index',function (err, html) {
      res.send(html)
    }
    
  )});
  const mydata={name:"Demande",comment:"Je suis là"};
  app.get('/post', function (req, res) {
    res.json(mydata);
  });
  app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

app.listen(3000)
console.log("Le serveur ecoute sur le port 3000")