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

function fillGameField() {

	var generatedHTML = '';

	//Generate card field
	var unshuffeledCards = icons.concat(icons);

	var cards = [];

	while (unshuffeledCards.length != 0) {
		index = Math.floor(Math.random() * unshuffeledCards.length) ;
		cards.push(unshuffeledCards[index]);
		unshuffeledCards.splice(index, 1);
	}


	cards.forEach(function(card, index) {
	  generatedHTML += '<div class="field" id="field-1">\
				<div class="card card-closed" id="card_'+index+'_closed"></div>\
				<div class="card card-open closed" id="card_'+index+'_open"><i class="fab fa-'+card+'"></i></div>\
			</div>';
	});

	$('.game').html(generatedHTML);
}


$(function() {
	fillGameField();

	$('.field').on('click', function() {
		$(this).find('.card-open').toggleClass('closed');
		$(this).find('.card-closed').toggleClass('closed');
	});
});