import React, { Component } from 'react';

import { Link } from "@react-navigation/web";

export class Header extends Component {

  render() {
    return ( 
        <div className="header" 
            data-test="header" > 
          <Link routeName="GuessWord" 
            data-test="GuessWord" >
            guesser
          </Link>  

          <span> / </span>

          <Link routeName="Counter" 
            data-test="Counter">
            counter
          </Link> 
          <br />
          <br />
        </div>
    );
  }
}

export default Header;