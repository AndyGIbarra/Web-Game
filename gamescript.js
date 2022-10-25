import Deck from "/deck.js"

// const cards = document.querySelector(".cards")
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

dragElement(document.getElementById("eight"));
dragElement(document.getElementById("nine"))
dragElement(document.getElementById("ten"))
dragElement(document.getElementById("eleven"))
dragElement(document.getElementById("twelve"))
// w3 schools, make element draggable

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let playerCards, centerCards, computerCards

startGame()
function startGame(){
   const deck = new Deck()
   deck.shuffle()

   playerCards = new Deck(deck.cards.slice(0,20))
   one.appendChild(deck.cards[0].getHTML())
   two.appendChild(deck.cards[1].getHTML())
   three.appendChild(deck.cards[2].getHTML())
   four.appendChild(deck.cards[3].getHTML())
   five.appendChild(deck.cards[4].getHTML())

   centerCards = new Deck(deck.cards.slice(20,32))
   six.appendChild(deck.cards[20].getHTML())
   seven.appendChild(deck.cards[21].getHTML())

   computerCards = new Deck(deck.cards.slice(32,52))
   eight.appendChild(deck.cards[32].getHTML())
   nine.appendChild(deck.cards[33].getHTML())
   ten.appendChild(deck.cards[34].getHTML())
   eleven.appendChild(deck.cards[35].getHTML())
   twelve.appendChild(deck.cards[36].getHTML())

   console.log(playerCards)
   console.log(centerCards)
   console.log(computerCards)
}


//function newCard(){
   // deck.cards.map( ( card, i ) => {
     //   one.appendChild(card.getHTML())
        //two.appendChild( card.getHTML() )
   // })

//}

//newCard();'

// cards.appendChild(deck.cards[0].getHTML())
// cards.appendChild(deck.cards[1].getHTML)
// one.appendChild(deck.cards[0].getHTML())
// two.appendChild(deck.cards[1].getHTML())
// three.appendChild(deck.cards[2].getHTML())
// four.appendChild(deck.cards[3].getHTML())
// five.appendChild(deck.cards[4].getHTML())
// six.appendChild(deck.cards[5].getHTML())
// seven.appendChild(deck.cards[6].getHTML())
// eight.appendChild(deck.cards[7].getHTML())
// nine.appendChild(deck.cards[8].getHTML())
// ten.appendChild(deck.cards[9].getHTML())
// eleven.appendChild(deck.cards[10].getHTML())
// twelve.appendChild(deck.cards[11].getHTML())

//Computer Hand Array 
//deck[cards].slice( 0,19 )

//Player Hand Array
