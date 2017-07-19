var cards = [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },
  {
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"
  },
  {
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

var score = 0;

var setScore = function() {
	var usable = score.toString();
	var result = document.getElementById('score')
	result.innerHTML = usable;
}

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
  	score += 1;
  	setScore();
  }
  else {
  	alert("Sorry, try again.");
  }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function() {
  theBoard = document.getElementById('game-board');
  theBoard.innerHTML = '';
  cardsInPlay = [];
  createBoard()
}

var turnOnButton = function() {
  var button = document.getElementById('reset');
  button.addEventListener('click', resetBoard);
}

createBoard();
turnOnButton();
setScore();