const Suits = ["♥️", "♠", "♦", "♣"]
const Values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
    // from Stack Overflow, fixed undefined issue
    constructor(cards = newDeck()){
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
    get color(){
        return this.suit === "♥️" || this.suit === "♦" ? "red" : "black"
    }
    getHTML(){
        const cardSlot = document.createElement("h6")
        cardSlot.innerText = this.suit
        cardSlot.classList.add("cards", this.color)
        cardSlot.dataset.value  = `${this.value}`
        return cardSlot
    }
}

function newDeck(){
    return Suits.flatMap(suit => {
        return Values.map(value =>{
            return new Card(suit, value)
        })
    })
}