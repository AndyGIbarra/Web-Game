import Deck from "/deck.js"

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const ten = document.querySelector(".ten")
const eleven = document.querySelector(".eleven")
const twelve = document.querySelector(".twelve")


const deck = new Deck()
deck.shuffle()
console.log(deck)

function newCard(){
    deck.cards.map( ( card, i ) => {
        one.appendChild(card.getHTML())
        //two.appendChild( card.getHTML() )
    })

}

newCard();

//cards.appendChild(deck.cards[i].getHTML())
//one.appendChild(deck.cards[0]].getHTML())
//two.appendChild(deck.cards[1].getHTML())
//three.appendChild(deck.cards[2].getHTML())
//four.appendChild(deck.cards[3].getHTML())
//five.appendChild(deck.cards[4].getHTML())
//six.appendChild(deck.cards[5].getHTML())
//seven.appendChild(deck.cards[6].getHTML())
//eight.appendChild(deck.cards[7].getHTML())
//nine.appendChild(deck.cards[8].getHTML())
//ten.appendChild(deck.cards[9].getHTML())
//eleven.appendChild(deck.cards[10].getHTML())
//twelve.appendChild(deck.cards[11].getHTML())

//Computer Hand Array 
//deck[cards].slice( 0,19 )

//Player Hand Array 