var express = require('express');
var router = express.Router();
var str = '{ "name": "John Doe", "age": 42 }';
var obj = JSON.parse(str);

router.get('/',(req,res)=>{
  res.send(obj);
});

router.put('/',(req,res)=>{
  console.log(req);
});


module.exports = router;
