//This file will contain all the functions that deal with monster and event Spawns



//import required dependencies and libraries
var haversine = require('./haversine');
var spawnModel = require('../config/models/spawns');

mongoose.Promise = Promise;

module.exports = {

  checkSpawnDistance:function checkSpawnDistance(currentLatitude,currentLongitude){},
  //this function takes the current coordinates that the app provides
  //and returns true if an active spawn is roughly within 100m^2
  nearSpawnCheck: function nearSpawnCheck(latitude,longitude){
    var spawnList; // will store the results
    var spawnBool = false;
    spawnModel.find()
    .then(lists = (results) => {
      spawnList = results;
      var spawnExists = false;
      for(var value of spawnList){
        //Checks NorthSouth
        if(latitudeCheck(value.spawnLatitude,latitude)){
          //Check WestEast
          if(longitudeCheck(value.spawnLongitude,longitude)){
            spawnExists = true;
          }
        }
      }
      if(spawnExists){
        console.log("there is already a spawn nearby");
      }else{
        console.log("spawning new spawn hehe");
        generateNewSpawn(latitude,longitude);
      }

    });
  },

  populateSpawnDatabase: function populateSpawnDatabase(){

  }


};




// Given a  spawnlatitude and locationLatitude, checks
// if spawn is within roughly 100m north or south of the point given
// returns true if within 100m else false;
var latitudeCheck = (spawnLatitude,locationLatitude) => {
  var upperBound = locationLatitude +  0.001;
  var lowerBound = locationLatitude - 0.001;
  if((upperBound >= spawnLatitude) && (spawnLatitude>=lowerBound)){
    return true;
  }else{
    return false;
  }
}

var longitudeCheck = (spawnLongitude,locationLongitude) => {
  var upperBound = locationLongitude +  0.001;
  var lowerBound = locationLongitude - 0.001;
  if((upperBound >= spawnLongitude) && (spawnLongitude>=lowerBound)){
    return true;
  }else{
    return false;
  }
}

var generateNewSpawn = (currentLatitude,currentLongitude) => {
  var newLatitude = currentLatitude + generateRandomNumber();
  var newLongitude = currentLongitude + generateRandomNumber();
  var newSpawn = new spawnModel({
    spawnLatitude: newLatitude,
    spawnLongitude: newLongitude,
    spawnHitCount: 0
  });
  newSpawn.save();
}

var generateRandomNumber = () =>{
  var min = -0.001,
      max = 0.001,
      generatedNumber = Math.random() * (max-min) + min;

  return generatedNumber;
}