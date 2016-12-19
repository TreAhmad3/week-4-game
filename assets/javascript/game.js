var Game ={
	target: 0,
	wins: 0,
	losses: 0,
	crystal1: 0,
	crystal2: 0,
	crystal3: 0,
	crystal4: 0,
	score: 0,
	guess: function(event){
		var choice = event.target.id;
		Game.score += Game[choice];

		Game.update();

		if(Game.score > Game.target){
			Game.losses++;
			Game.reset();
			alert("YOU LOST! :(");
		}

		else if(Game.score === Game.target){
		 	Game.wins++;
		 	Game.reset();
		 	alert("YOU WON! :)");
		 }	

		 else {
		 	Game.update
		 }	
		 	
		
	},

	update: function(){
	$("#game-total").html(Game.target);
	$("#wins").html("Wins: " + Game.wins);
	$("#losses").html("Losses " + Game.losses);
	$("#user-total").html(Game.score);
	
	},
	
	reset: function(){
	Game.target = Math.floor((Math.random() * 120) + 1);
	$("#game-total").html(Game.target);

	var arr = []
	while(arr.length < 4){
    var randomnumber = Math.ceil(Math.random()*12)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    console.log(arr);
	}

	Game.crystal1 = arr[0];
	Game.crystal2 = arr[1];
	Game.crystal3 = arr[2];
	Game.crystal4 = arr[3];
	Game.score = 0;

	Game.update();
	},

};


document.addEventListener("DOMContentLoaded", function(){

	Game.reset();
	Game.update();

	$('.crystalSquare').click(Game.guess);

});