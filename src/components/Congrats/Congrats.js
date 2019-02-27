import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {

  render() {
    return (
      <div className="component-congrats"
        data-test="component-congrats" >
          { this.props.show ? "Yes, you did it" : "" }
      </div>
    );
  }
}

Congrats.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default Congrats;
