module.exports = mongoose.model(
  'User',{
    username:String,
    password:String,
    experience:Number,
    stepsTaken:Number,
    lastKnownLatitude:String,
    lastKnownLongitude:String
  });
