import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuessList extends Component {

  render() {

    const guesses = this.props.guesses.length ? this.props.guesses.map((item, index) => {
        return <div data-test="component-guess-item" key={index}> 
         {index } :  { item.guess } => { item.match } 
        </div>
    }) : "There are no guesses yet";

    const guessCount = this.props.guesses.length ? 
      <div> Total guesses : { this.props.guesses.length }</div> 
      : null;

    return (
      <div className="component-guess-list"
        data-test="component-guess-list" >
          { guesses }
          <br />
          { guessCount }
      </div>
    );
  }
}

GuessList.propTypes = {
    guesses: PropTypes.arrayOf(
        PropTypes.shape({
            guess: PropTypes.string,
            match: PropTypes.number
          }
    ))
};

export default GuessList;
