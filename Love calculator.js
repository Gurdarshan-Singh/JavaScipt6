prompt("Enter 1st person name ");
prompt("Enter 2nd person name ");
var n = Math.floor((Math.random()*100)+1);
if(n>70){
alert("Love Percentage is "+n+"% and You are truely in love with each other");  
}
if(n>30 && n<=70){
  alert("Love Percentage is "+n+"%");
}
if(n<30){
  alert("Love Percentage is "+n+"% and You are like oil and water"); 
}
else{
alert("Love Percentage is "+n+"%");
}
console.log(n);
