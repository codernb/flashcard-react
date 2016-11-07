import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class Footer extends Component {

  render() {
    return (
      <div className="container">
        <p><FontAwesome name="copyright" />The {this.props.team} Team</p>
        <p>Questionnaire counter: {this.props.qs.length}</p>
      </div>
    );
  }

}

export default Footer;
