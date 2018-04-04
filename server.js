var express = require('express')
var app = express()
var fs = require('fs')

app.get('/json/config/:filename', function(req, res) {
  fs.readFile(__dirname + '/JSON/config/' + req.params.filename + '.json', function(e, data) {
    if (e) {
      res.status(404)
      res.send({error: 'config not found'})
    }
    res.send(JSON.parse(data))
  })
})

app.get('/json/data/:filename', function(req, res) {
  fs.readFile(__dirname + '/JSON/data/' + req.params.filename + '.json', function(e, data) {
    if (e) {
      res.status(404)
      res.send({error: 'config not found'})
    }
    res.send(JSON.parse(data))
  })
})

app.use( express.static(__dirname + '/dist' ) )
app.get('*', function(req, res){
  res.redirect('/')
})

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port)
})
