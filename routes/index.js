var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin/login'); /* Cuando pongamos la '/' redirecciona al admin*/ 
});

module.exports = router;
