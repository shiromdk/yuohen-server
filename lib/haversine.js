// This file implements the haversine distance algorithm which calculates distance between two points given
// longitude and latitude. Algorithm is based on the formula found at http://www.movable-type.co.uk/scripts/latlong.html




module.exports={
  haversineDistance:function haversineDistance(lat1,lon1,lat2,lon2){
    var radius = 6371; //Radius of the Earth 6371km
    var x1 = lat2-lat1;
    var x2 = lon2-lon1;
    var dLat = toRadian(x1);
    var dLon = toRadian(x2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = radius * c;
    return distance;
  }
}

// Arrow function that converts degrees to radians
var toRadian = (degrees) => {
  return (degrees * Math.PI/180);
}
