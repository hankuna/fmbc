var express = require('express');
var router = express.Router();
var query = require("../config")

/* GET users listing. */
//
router.get('/', function (req, res, next) {
    const jd = require("../data/jd.json")
    res.json(jd)
});

module.exports = router;
