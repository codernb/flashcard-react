import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class ListItem extends Component {

  render() {
    return (
      <Row>
        <Col xs={1}>
          {this.props.questionnaire.id}
        </Col>
        <Col xs={3}>
          {this.props.questionnaire.title}
        </Col>
        <Col xs={8}>
          {this.props.questionnaire.description}
        </Col>
      </Row>
    );
  }

}

export default ListItem;
