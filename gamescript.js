import Deck from "/deck.js"

const computerHand = document.querySelector(".computerHand")
const playerHand = document.querySelector(".playerHand")
const center= document.querySelector(".center")

const deck = new Deck()
deck.shuffle()
console.log(deck)

computerHand.appendChild(deck.cards[0].getHTML())

center.appendChild(deck.cards[5].getHTML())

playerHand.appendChild(deck.cards[7].getHTML())