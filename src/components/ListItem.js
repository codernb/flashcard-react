import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import QuestionnaireShowDialog from './QuestionnaireShowDialog.js';

class ListItem extends Component {

  render() {
    return (
      <tr>
        <td>
          {this.props.questionnaire.id}
        </td>
        <td>
          {this.props.questionnaire.title}
        </td>
        <td>
          {this.props.questionnaire.description}
        </td>
        <td>
        <QuestionnaireShowDialog questionnaire={this.props.questionnaire} />
        </td>
      </tr>
    );
  }

}

export default ListItem;
