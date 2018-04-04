var express = require('express')
var router = express.Router()

router.get('/config/:filename', function(req, res) {
  fs.readFile('./JSON/config/' + req.params.filename + '.json', { encoding: 'utf8' }, function(err, data) {
    if (err) {
      res.status(400)
      res.send({error: 'config not found'})
    } else {
      res.send(JSON.parse(data))
    }
  })
})

module.exports = router
