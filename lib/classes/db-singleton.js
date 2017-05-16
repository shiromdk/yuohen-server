'use strict';

var Spawn = require('./spawn-class');
let instance = null;

class DatabaseSingleton{




  contructor(testvar){
    if(!instance){
      instance = this;
      console.log('hi');
    }


  }

  addSpawn(id,latitude,longitude,level){
    this.spawnList.push(new Spawn(id,latitude,longitude,level));
  }
}


module.exports = DatabaseSingleton;
