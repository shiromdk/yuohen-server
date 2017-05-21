var express = require('express');
var router = express.Router();
var haversine = require('../lib/haversine');
var spawnmethods = require('../lib/spawns');
var spawnModel = require('../config/models/spawns');
var dbsingleton = require('../lib/classes/db-singleton');


router.get('/',(req,res)=>{
  res.send('No Main Page Yet');
});

router.get('/api/spawnlocations',(req,res)=>{
  if(req.query.lat && req.query.lon){
    console.log("GPS query present");
    var currentLatitude = Number.parseFloat(req.query.lat);
    var currentLongitude = Number.parseFloat(req.query.lon);
    spawnmethods.nearSpawnCheck(currentLatitude,currentLongitude);
    res.json(dbsingleton.get());
  }else{
    console.log("No query string present");
    res.json(dbsingleton.get());
  }
});


router.get('/api/interactspawn',(req,res)=>{
  if(req.query.currentlat && req.query.currentlon && req.query.spawnlat && req.query.spawnlon){
    console.log("got here");
      var distance = haversine.haversineDistance(req.query.currentlat,req.query.currentlon,req.query.spawnlat,req.query.spawnlon);
      console.log(distance);
      if(distance <= 0.050){
        spawnModel.findOneAndRemove({'spawnLatitude':req.query.spawnlat,'spawnLongitude':req.query.spawnlon},
        function(err,spawn) {
          if(spawn){
            var response = {"response":"1"}
            res.json(response);
          }
          if(!spawn)console.log("no spawn found");
          if(err)console.log("error");
        });
      }else{
        var response = {"response":"2"}
        res.json(response);
      }
  }else{
    console.log("no query");
    res.send("No query");
  }
});


router.get('/api/distancecalculator',(req,res)=>{
  if(req.query.lat1&&req.query.lat2&&req.query.lon1&&req.query.lon2){
    var distance = haversine.haversineDistance(req.query.lat1,req.query.lon1,req.query.lat2,req.query.lon2);
    res.json({'distance':distance});
  }else{
    res.send('Bad Request');
  }
});




module.exports = router;
