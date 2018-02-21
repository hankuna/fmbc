var express = require('express');
var router = express.Router();
const query = require('../config')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 'select * from fmbc'
  query(sql,(err,result) => {
    res.send(result);
  })
  
});

module.exports = router;
