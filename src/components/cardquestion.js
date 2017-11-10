import React, { Component } from 'react';
import CardData from '../data.js'

class CardQuestion extends Component {

    render() {
      const deckQuestion = [];
      deckQuestion.push(CardData[0].question);

        return (
            <div className="CardQuestion">
              <div className="Cards">{deckQuestion}</div>

            </div>
        );
    }
}

export default CardQuestion;
