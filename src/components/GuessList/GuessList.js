import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuessList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const guesses = this.props.guesses.length ? this.props.guesses.map((item, index) => {
        return <div data-test="component-guess-item" key={index}> { item.guess } : { item.match } </div>
    }) : "There are no guesses yet";

    return (
      <div className="component-guess-list"
        data-test="component-guess-list" >
          { guesses }
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
