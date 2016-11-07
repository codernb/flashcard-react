import React, { Component } from 'react';
import ListItem from './ListItem';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog';

class QuestionnaireContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      qs: this.props.qs
    };
    this.addQuestionnaire = this.addQuestionnaire.bind(this);
  }

  addQuestionnaire(questionnaire) {
    questionnaire.id = this.props.qs.length + 1;
    this.props.qs.push(questionnaire);
    this.setState({qs: this.props.qs});
  }

  render() {
    return (
      <div className="container">
        <QuestionnaireCreateDialog addQuestionnaire={this.addQuestionnaire} />
        <Table striped bordered>
          <tbody>
            {this.props.qs.map((q) => <ListItem key={q.id} questionnaire={q} />)}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default QuestionnaireContainer;
