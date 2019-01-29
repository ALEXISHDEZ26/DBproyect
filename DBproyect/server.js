const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
var db

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {    // aplicacion get(read)
    res.sendFile(__dirname + '/index.html')}  //res es la respuesta que enviara el server cuando obtenga una coincidencia en este caso "/" y enviara el archivo html
)
  // Note: request and response are usually written as req and res respectively.

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
       if (err) return console.log(err)
    
       console.log('saved to database')
       res.redirect('/')
    })
})

MongoClient.connect('mongodb+srv://alexis:rock260795@mydatabase-rdzfu.mongodb.net/test?retryWrites=true', (err, client) => {
  if (err) return console.log(err)
  db = client.db('firstDB') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
