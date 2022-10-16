const Suits = ["Hearts", "Spades", "Diamonds", "Clubs"]
const Values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

class Deck {
    constructor(cards = newDeck()){
        this.cards = cards
    }
    //get stackOfCards(){
        //return this.cards.length
    //}
    shuffle(){
        for (let i = 52 - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{
    constructor(suit,value){
        this.suit = suit
        this.value = value
    }
}

function newDeck(){
    return Suits.flatMap(suit => {
        return Values.map(value =>{
            return new Card(suit,value)
        })
    })
}

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)