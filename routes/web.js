var express = require('express');
var router = express.Router();
var haversine = require('../lib/haversine');
var spawnModel = require('../config/models/spawns');
var dbsingleton = require('../lib/classes/db-singleton');


router.get('/',(req,res)=>{
  res.send('No Main Page Yet');
});

router.get('/api/spawnlocations',(req,res)=>{
  res.json(dbsingleton.get());
});




module.exports = router;
