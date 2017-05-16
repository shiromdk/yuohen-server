//this file contains the mongoose model for the Spawns Document


var mongoose = require('mongoose');
module.exports = mongoose.model(
  'Spawns',{
    spawnLatitude:Number,
    spawnLongitude:Number,
    spawnHitCount:Number,
});
