var mongoose = require('mongoose');
module.exports = mongoose.model(
  'SpawnCount',{
    id: Number,
    count:Number
});
