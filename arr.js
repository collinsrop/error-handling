"use strict";
	let inputNumber = prompt("Enter a number greater than 30 and less than 40?");
	try{
	if(inputNumber===NaN) throw "The input must be a number!";
	else if(inputNumber>40) throw "The NUMBER MUST be less than 40";
	else if(inputNumber<30) throw  "The NUMBER MUST BE GREATER THAN 30";
}

  catch (e) {
     console.log(e);
 }
  


