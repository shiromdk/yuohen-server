var express = require('express');
var router = express.Router();
var haversine = require('../lib/haversine');
var spawnModel = require('../config/models/spawns');


router.get('/',(req,res)=>{
  res.send('No Main Page Yet');
});

router.get('/spawnlocations',(req,res)=>{
  var spawnList;
  spawnModel.find()
  .then(lists = (results) => {
    spawnList = results;
    console.log(spawnList);
    res.json(spawnList);
  })
});




module.exports = router;
