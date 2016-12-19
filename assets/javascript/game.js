// add global variables

/*jslint browser: true*/ /*global  $*/

$( document ).ready(function() {

	var game = {

		winningNumber : 0,

		wins : 0,

		losses : 0,

		totalScore : 0,

		creature1:0,

		creature2:0,

		creature3:0,

		creature4:0,




		

		//startUp function
		startUp: function(){
			game.winningNumber = parseInt(Math.floor(Math.random() * (120 - 19 + 1)) + 19);

			console.log("Computer picked " + game.winningNumber);

			game.totalScore = 0;

			$("#losses").html("Losses: " + game.losses);
			$("#wins").html("Wins: " + game.wins);
			$("#game-total").html(game.winningNumber);
			$("#user-total").html(game.totalScore);

			console.log("User's starting score " + game.totalScore);

			//create a new array of 4 random numbers that will be used to assign the crystal's value


			crystalNumbers = [];

			crystalNumbers.length = 0;

			

			//set array value's
			for (var crystalNumbers = [], i = 0; i < 4; i++) {
				var numbers = parseInt(Math.floor( Math.random() * 11 +1).toString());
				crystalNumbers.push(numbers);

				// console.log(crystalNumbers);

				$(".crystalSquare").each(function(i, obj) {
					$(this).attr("data-crystalvalue", crystalNumbers[i]);
					
					//allows you to see array being created
					console.log(parseInt($(this).data("crystalvalue")));	
				});


			}
		},

		scores: function() {
			//on the click of the crystal's add value to the users total score
			$(".crystalSquare").on('click', function(event){
				game.totalScore = parseInt(game.totalScore) + parseInt($(this).data("crystalvalue"));

				//see individual crystal values
				console.log(parseInt($(this).data("crystalvalue")) + " is this crystal's value!");

				//see the users total score	
				console.log("This is the users total score " + game.totalScore);

				$("#user-total").html(game.totalScore);

				if (parseInt(game.totalScore) === game.winningNumber) {
					parseInt(game.wins++);
					$("#wins").html("Wins: " + game.wins);
					$(this).removeData("crystalvalue"); // win or lose will reset values for new game
					setTimeout(game.startUp, 1000);
					setTimeout(game.scores, 1000);

				} else if (parseInt(game.totalScore) > game.winningNumber) {
					parseInt(game.losses++);
					$("#losses").html("Losses: " + game.losses);
					// console.log(game.losses + " losses!");
					$(this).removeData("crystalvalue");
					setTimeout(game.startUp, 1000);
					setTimeout(game.scores, 1000); 
				}
				
			});
		} 

		
	};
	
	game.startUp();

	game.scores();




});