export function shuffleDeck() {
  return {
    type: "SHUFFLE_DECK"
  };
}

export function flipCard(card) {
  return {
    type: "FLIP_CARD",
    card
  };
}

export function previousCard(card) {
  return {
    type: "PREVIOUS",
    card
  };
}

export function nextCard(card) {
  return {
    type: "NEXT",
    card
  };
}
