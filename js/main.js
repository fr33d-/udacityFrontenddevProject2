//Initial and global variables for all icons. Cards in this game and a Player.
var icons = [
	'amazon',
	'apple',
	'angular',
	'meetup',
	'facebook',
	'firefox',
	'github',
	'google'
];
var cards = [];
var secondsPlayed = 0;

//Function to initial fill the game field.
function fillGameField() {

	//Create an individual player, html variables, the actual cards and the unshuffled cards with two of each symbols
	player = new Player();
	var generatedHTML = '';
	cards = [];
	var unshuffeledCards = icons.concat(icons);

	//Shuffle cards
	while (unshuffeledCards.length != 0) {
		index = Math.floor(Math.random() * unshuffeledCards.length) ;
		cards.push(unshuffeledCards[index]);
		unshuffeledCards.splice(index, 1);
	}

	//Fill the game html with every card
	cards.forEach(function(card, index) {
	  generatedHTML += '<div class="field unfound" id="'+index+'">\
				<div class="card card-closed"></div>\
				<div class="card card-open closed"><i class="fab fa-'+card+'"></i></div>\
			</div>';
	});
	$('.game').html(generatedHTML);
}

//Function the chef if the player has won
function hasWon() {
	//Display a modal if the player has won.
	//Show the seconds he needed and give option to start the game again.
	var restart = confirm('Congratulations! \n You won the game in '+secondsPlayed+' seconds. \n New game?');
	if (restart == true) {
		fillGameField();
	}
}


//The class for the player
class Player {
	constructor() {
		this.turn = 1;
		this.firstCard = 0;
		this.secondCard = 0;
		this.found = 0;
		this.firstTurnMade = false;
		this.totalTurns = 0;
	}

	//gets called every time the player clicks on a card
	playerTurn(cardID) {

		//Counts the turns and removes the color of stars if he/she uses many turns
		this.totalTurns++;
		if (this.totalTurns > 20 && this.totalTurns <= 30 ) {
			$('#star-3').removeClass('active');
		} else if (this.totalTurns > 30 && this.totalTurns <= 40 ) {
			$('#star-2').removeClass('active');
		} else if (this.totalTurns > 40 ) {
			$('#star-1').removeClass('active');
		}
		$('#moves').html(this.totalTurns+' moves');

		//If its the first card you just flip one card
		if (this.turn == 1) {
			// Just flip the first card.
			$('#'+cardID).find('.card-open').toggleClass('closed');
			$('#'+cardID).find('.card-closed').toggleClass('closed');
			this.firstCard = cardID;
			this.turn++;

			//Check if it was the first turn, if so start a timer.
			if (!this.firstTurnMade) {
				var timer = window.setInterval(function () {
			    	secondsPlayed++;
					$('#timer').html(secondsPlayed+' s');
				}, 1000);
				this.firstTurnMade = true;
			}

		} else if (this.turn == 2) {
			//Flip the second card and set the next turn to the first in round.
			$('#'+cardID).find('.card-open').toggleClass('closed');
			$('#'+cardID).find('.card-closed').toggleClass('closed');
			this.secondCard = cardID;
			this.turn = 1;

			//Check if the two cards match
			if (cards[this.firstCard] == cards[this.secondCard] && this.firstCard != this.secondCard) {
				//If the cards match, count one to the found indicator.
				var list = '';
				this.found++;

				for (var i = this.found; i > 0; i-- ) {
					list += '<li class="done"></li>';
				}
				for (var i = this.found; i < 8; i++ ) {
					list += '<li class="open"></li>';
				}
				$('.progress-indicator ul').html(list);

				//Set the cards to 'found'-state, so they change the color and
				//can not be clicked again.
				$('#'+this.firstCard).removeClass('unfound').addClass('found');
				$('#'+this.secondCard).removeClass('unfound').addClass('found');

				//And check if the player has won.
				if (this.found == 8) {
					setTimeout(function(){
						hasWon();
					}, 1000);
				}

			} else {
				//Cards don't match. Turn both cards after the first animation has finished
				var firstCard = this.firstCard;
				var secondCard = this.secondCard;
				setTimeout(function(){
					$('#'+firstCard).find('.card-open').toggleClass('closed');
					$('#'+firstCard).find('.card-closed').toggleClass('closed');
					$('#'+secondCard).find('.card-open').toggleClass('closed');
					$('#'+secondCard).find('.card-closed').toggleClass('closed');
				}, 1000);
			}

		}
	}
}

//Initial set one player
var player = new Player();


//And finally bring it to live with some jQuery magic.
$(function() {
	fillGameField();

	$('body').on('click', '.unfound', function() {
		player.playerTurn( $(this).attr('id') );
	});
});

















