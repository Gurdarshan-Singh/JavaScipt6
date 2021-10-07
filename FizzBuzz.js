var output=[];
var n=1;
function fizzbuzz(){
  if(n%3===0 && n%5===0){
    output.push("FizzBuzz");
    console.log(output);
  }
  else if(n%3===0){
    output.push("Fizz");
    console.log(output);
  }
  else if(n%5===0){
    output.push("Buzz");
    console.log(output);
  }
  else{
    output.push(n)
  console.log(output);
  }
  n++;
}
