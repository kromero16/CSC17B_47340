/*
	File: Deck.js 
	Author: Kevin Romero
	Class: CSC17B Team Blackjack
	Purpose: Deck object for Blackjack
	Date: 10/16/17
*/

//Deck class
function Deck(){
	//size variables
	this.DECK_S = 52;
	this.SUIT_S = 4;
	this.FACE_S = 13;

	//card object
	this.aCard;

	//deck container for cards
	this.aDeck=[];

	//constructor functions
	this.fillDeck();
	this.shuffleDeck();
	//this.prntArrayofCrds();
};

//shuffle the deck
Deck.prototype.shuffleDeck=function(){
	for(var i=this.aDeck.length-1;i>0;i--){
		var j=Math.floor(Math.random()*(i+1));
		var temp=this.aDeck[i];
		this.aDeck[i]=this.aDeck[j];
		this.aDeck[j]=temp;
	}
};

//Deal card from back of deck
Deck.prototype.dealCard=function(){
	var d = new Card();
	d = this.aDeck[this.aDeck.length-1];
	this.aDeck.pop();
	return d.getSetCard();
};

//print array contents
Deck.prototype.prntArrayofCrds=function(){
	for(var i=0;i<this.aDeck.length;i++){
		document.write(this.aDeck[i].getSetCard());
		document.write(" -> Card Value: ");
		document.write(this.aDeck[i].getCardVal(this.aDeck[i].getFace())+" <br>");
		document.write("<br>");
	}
};

//print default deck
Deck.prototype.printDeck=function(){
	for(var i=1;i<this.FACE_S+1;i++){
		for(var j=1;j<this.SUIT_S+1;j++){
			document.write(this.aCard.getGivenCard(i,j));
			document.write(" -> Card Value: ");
			document.write(this.aCard.getCardVal(i)+" <br>");
			document.write("<br>");
		}
	}
};

//fill deck
Deck.prototype.fillDeck=function(){
	for(var i=1;i<this.FACE_S+1;i++){
		for(var j=1;j<this.SUIT_S+1;j++){
			this.aCard = new Card(i,j);
			this.aDeck.push(this.aCard);
		}
	}
};


