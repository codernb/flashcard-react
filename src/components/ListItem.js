import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import QuestionnaireShowDialog from './QuestionnaireShowDialog.js';
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog.js';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.deleteQuestionnaire = this.deleteQuestionnaire.bind(this);
  }

  deleteQuestionnaire() {
    this.props.deleteQuestionnaire(this.props.questionnaire.id);
  }

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
        <td>
          <QuestionnaireUpdateDialog questionnaire={this.props.questionnaire} updateQuestionnaire={this.props.updateQuestionnaire} />
        </td>
        <td>
          <Button onClick={this.deleteQuestionnaire}>Delete</Button>
        </td>
      </tr>
    );
  }

}

export default ListItem;
