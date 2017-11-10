import shuffleDeck from './shuffledeck'
import previousCard from './previous'
import nextCard from './next'
import flipCard from './flipCard'

const INITIAL_STATE = { deckofcards: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHUFFLE_DECK':
      return shuffleDeck();
    case 'FLIP_CARD':
      return flipCard(state, action.card);
    case 'PREVIOUS':
      return previousCard(state, action.index);
    case 'NEXT':
      return nextCard(state, action.index);
    default:
      return state;

  }
}
