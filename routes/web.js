var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
  res.send('No Main Page Yet');
});


module.exports = router;
