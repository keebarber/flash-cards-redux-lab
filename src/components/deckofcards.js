import React, { Component } from 'react';
import Cards from './cards.js'
import Buttons from './buttons.js'

// Define tha ContactCard comonent using ES6 class syntax
class DeckOfCards extends Component {

    render() {

        return (
            <div className="DeckOfCards">
              <Cards />
              <Buttons />
            </div>
        );
    }
}

export default DeckOfCards;
