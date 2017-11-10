import React, { Component } from 'react';
import CardData from '../data.js'

class CardAnswer extends Component {

    render() {
      const deckAnswer = [];
      deckAnswer.push(CardData[0].answer);

        return (
            <div className="CardAnswer">
              <div className="Cards">{deckAnswer}</div>

            </div>
        );
    }
}

export default CardAnswer;
