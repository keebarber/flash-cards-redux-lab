export default function flipCard(state, card) {

if (!flipped) {
  return state;
}

const flipped = state.flipped.slice();
flipped.push(card);

return Object.assign({}, state, {
  flipped
})

}
