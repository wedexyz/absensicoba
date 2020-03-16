
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  var n = d.toLocaleDateString();
  document.getElementById("waktu").value = d.toLocaleTimeString()+" "+n;

}


