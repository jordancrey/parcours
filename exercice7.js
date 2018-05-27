function main(){
var pointure =  document.getElementById('pointure').value;
var annee = document.getElementById('annee').value;
console.log(pointure +"    "+annee);
math(pointure,annee);
}
function math(pointure,annee){
  var result = (pointure*2)+5;
  result = (result*50)-annee;
  result  += 1766;
  alert(result);
  console.log(result);
}
