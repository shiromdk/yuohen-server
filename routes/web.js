var express = require('express');
var router = express.Router();
var haversine = require('../lib/haversine');
var spawnModel = require('../config/models/spawns');
var dbsingleton = require('../lib/classes/db-singleton');


router.get('/',(req,res)=>{
  res.send('No Main Page Yet');
});

router.get('/spawnlocations',(req,res)=>{
  /*var spawnList;
  spawnModel.find()
  .then(lists = (results) => {
    spawnList = results;
    console.log(spawnList);
    res.json(spawnList);
  })*/
  res.json(dbsingleton.get());
});




module.exports = router;
