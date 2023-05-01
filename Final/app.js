//Four arrays, one for each suit in a card deck
let spades = ["SpadeAce", "Spade2", "Spade3", "Spade4", "Spade5", "Spade6", "Spade7", "Spade8", "Spade9", "Spade10", "SpadeJack", "SpadeQueen", "SpadeKing"];
let clubs = ["ClubAce", "Club2", "Club3", "Club4", "Club5", "Club6", "Club7", "Club8", "Club9", "Club10", "ClubJack", "ClubQueen", "ClubKing"];
let hearts = ["HeartAce", "Heart2", "Heart3", "Heart4", "Heart5", "Heart6", "Heart7", "Heart8", "Heart9", "Heart10", "HeartJack", "HeartQueen", "HeartKing"];
let diamonds = ["DiamondAce", "Diamond2", "Diamond3", "Diamond4", "Diamond5", "Diamond6", "Diamond7", "Diamond8", "Diamond9", "Diamond10", "DiamondJack", "DiamondQueen", "DiamondKing"];
//An array that holds the four card arrays
let deck = [spades, clubs, hearts, diamonds];
//An emtpy array that will hold the card values that are already assigned
let assignedCards = [];

//A function that chooses one of the suits from the deck
function suitPicker(){
    let suitPicked = Math.floor(Math.random()*4);
    //returns the suit that is chosen
    return deck[suitPicked];
}
//A function that picks what card from a suit is played
function cardPicker(){
    let cardPicked = Math.floor(Math.random()*13);
    //A variable that holds the card that has been chosen
    let chosenCard = suitPicker()[cardPicked];
    //Adds the chosen card to the assignedCards array
    assignedCards.push(chosenCard);
    console.log(assignedCards);
}