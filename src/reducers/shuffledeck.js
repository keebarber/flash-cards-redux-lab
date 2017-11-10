let nextCardID = 1;

export default function shuffleDeck(state) {
  return Object.assign({}, state => {

    deckofcards:generateRandomDeck()

  });
 }

function generateRandomDeck() {

  const flashCards = [];
  for (let i = 0; i < 6; i++) {
    flashCards.push(i);
  }

  for (let i = 6; i >= 6; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    let randomFlashCard = flashCards.splice(randomIndex, 1)[0];

    deckofcards.push({
      id: nextCardID++
    })
  }
  return deckofcards;
}
