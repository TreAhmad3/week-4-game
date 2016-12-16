// add global variables

	var crystal1;

	var crystal2; 

	var crystal3; 

	var crystal4;

	function randomizer(){
	crystal1 = Math.floor( Math.random() * 11 +1);
	crystal2 = Math.floor( Math.random() * 11 +1);
	crystal3 = Math.floor( Math.random() * 11 +1);
	crystal4 = Math.floor( Math.random() * 11 +1);
}


$( document ).ready(function() {

	var winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

	var wins = 0;

	var losses = 0;

	var cryNumber = Math.floor( Math.random() * 12 + 1);

	var totalScore = 0;


	randomizer();
	console.log(crystal1);
	console.log(crystal2);
	console.log(crystal3);
	console.log(crystal4);



});