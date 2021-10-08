var n = 99
while (n>= 0) {
    var bottleWord = "bottles";
    if (n === 1) {
        bottleWord = "bottle";
    } 
    console.log(n+ " " + bottleWord + " of beer on the wall");
    console.log(n+ " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	n--; 
	if(n===0){
		console.log( "no more " + bottleWord + " of beer on the wall.");
		console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
		break;
	}
	else if(n===1){
		bottleWord="bottle";
		console.log(n + " " + bottleWord + " of beer on the wall.");
	}
	else{
    console.log(n + " " + bottleWord + " of beer on the wall.");
	}
}
