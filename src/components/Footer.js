import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class Footer extends Component {

  render() {
    return (
      <div className="container">
        <p><FontAwesome name="copyright" />The {this.props.team} Team</p>
      </div>
    );
  }
  
}

export default Footer;
