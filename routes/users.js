var express = require('express');
var router = express.Router();

let conn = require('./connection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.connect();
  let start = req.query.start ? req.query.start : 0;
  let sql = "select * from user limit ?,?";
    conn.query(sql,[start,10], function (err, results) {
        if (!err) {
          res.render('userlist',{users: results});
            console.log(results);
        }else {
            res.render('404');
        }
    });

  conn.end();
});

module.exports = router;
