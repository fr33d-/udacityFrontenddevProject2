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

function fillGameField() {

	var generatedHTML = '';
	var unshuffeledCards = icons.concat(icons);

	while (unshuffeledCards.length != 0) {
		index = Math.floor(Math.random() * unshuffeledCards.length) ;
		cards.push(unshuffeledCards[index]);
		unshuffeledCards.splice(index, 1);
	}

	cards.forEach(function(card, index) {
	  generatedHTML += '<div class="field unfound" id="'+index+'">\
				<div class="card card-closed"></div>\
				<div class="card card-open closed"><i class="fab fa-'+card+'"></i></div>\
			</div>';
	});

	$('.game').html(generatedHTML);
}

class Player {
	constructor() {
		this.turn = 1;
		this.firstCard = 0;
		this.secondCard = 0;
		this.found = 0;
	}

	//Todo: wenn schon im zweiten zug die richtige karte gefunden wurde, gleich die leiste aktualisieren
	//Todo: irgendwas anzeigen wenn man gewonnen hat.

	playerTurn(cardID) {

		if (this.turn == 1) {
			$('#'+cardID).find('.card-open').toggleClass('closed');
			$('#'+cardID).find('.card-closed').toggleClass('closed');
			this.firstCard = cardID;
			this.turn++;
		} else if (this.turn == 2) {
			$('#'+cardID).find('.card-open').toggleClass('closed');
			$('#'+cardID).find('.card-closed').toggleClass('closed');
			this.secondCard = cardID;
			this.turn = 1;

			if (cards[this.firstCard] == cards[this.secondCard]) {
				var list = '';
				this.found++;

				for (var i = this.found; i > 0; i-- ) {
					list += '<li class="done"></li>';
				}
				for (var i = this.found; i < 8; i++ ) {
					list += '<li class="open"></li>';
				}
				$('.progress ul').html(list);

				$('#'+this.firstCard).removeClass('unfound').addClass('found');
				$('#'+this.secondCard).removeClass('unfound').addClass('found');
			} else {
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

$(function() {
	fillGameField();

	var player = new Player();

	$('body').on('click', '.unfound', function() {
		player.playerTurn( $(this).attr('id') );
	});
});

















