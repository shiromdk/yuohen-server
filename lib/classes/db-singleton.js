var haversine = require('../haversine');
var spawnModel = require('../../config/models/spawns');
var spawncountmodule = require('../../config/models/spawncount');

//This module will contain the spawn data for which the app will use

let spawnlist = null;
let spawncount = 0;

module.exports = {
  sync:() => {
    spawnModel.find()
    .then(lists = (results) => {
      spawnlist = results;
      return true;
    })
  },
  get:() => {return spawnlist},
  syncSpawnCount:() => {
    syncSpawnCount.find()
  }
}
