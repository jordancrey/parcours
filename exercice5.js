function main(){

  var n1 = document.getElementById('premier_nombre').value;
  var n2 = document.getElementById('deuxieme_nombre').value;
  math(n1,n2);
}
function math(n1,n2){
       return alert(Math.floor(n1)*n2);
}
