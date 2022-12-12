function computeConsumption(){
  var distance = document.getElementById('range').value;
  var fuel = document.getElementById('battery').value;
  var costper = document.getElementById('costper').value;
  var consumed =  (fuel / (distance/100)).toFixed(2);
  var costper100 = (consumed * costper).toFixed(2);
  var mileage = (distance / fuel);
  document.getElementById('consumption').innerHTML = "Consumption = "+consumed+" Kwh/100km ( Rs " + costper100 + " / 100km )<br><br> Mileage = "+mileage+" Km/Kwh <br><br>Total cost = Rs " + (fuel*costper).toFixed(2);
}