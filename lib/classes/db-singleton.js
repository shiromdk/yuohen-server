var haversine = require('../haversine');
var spawnModel = require('../../config/models/spawns');
var SpawnCount = require('../../config/models/spawncount');
var spawnfunctions = require('./spawn-class');
//This module is a singleton module which will cache the spawn locations
//for the app. This will reduce the need to always ping the mLab database

let spawnlist = null;
let spawncount = 0;

module.exports = {
    sync: () => {
        spawnModel.find()
            .then(lists = (results) => {
                spawnlist = results;
                return true;
            })
    },
    get: () => {
        return spawnlist;
    },
    syncSpawnCount: () => {
      SpawnCount.findOne({'id': 1},function(err,counter){
        if(!counter){
          console.log("Error...cant find spawn counter document");
        }
        if(counter){
          console.log(counter);
          console.log(spawncount);
          counter.count =spawncount;
          counter.save();
        }
      });
    },
    setSpawnCount: (count) => {
      spawncount = count;
    },
    getSpawnCount: () => {
      return spawncount;
    },
    deleteSpawn: (id) => {
      spawnModel.findOne({'id':id},function(err,spawn){
        if(spawn){
          spawnModel.remove({'id':id},function(err){
            if(!err){
              console.log("Spawn Removed");
            }
          })
          console.log("sdsd");
        }
      })
    },
    incrementSpawnCount:() =>{
      spawncount++;
    }

}
