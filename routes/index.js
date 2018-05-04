var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello There! This is Noor' });
});

router.get("/me", function(req, res, next){
    res.send({name:'NOOR', age:24});
    console.log({name:'NOOR', age:24})
})

module.exports = router;
