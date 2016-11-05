import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Header extends Component {

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Flashcard Client with React</h1>
          <p>Version {this.props.version}</p>
        </Jumbotron>
      </div>
    );
  }

}

export default Header;
