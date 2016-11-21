import React, { Component } from 'react';
import ListItem from './ListItem';
import Table from 'react-bootstrap/lib/Table';
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog';

class QuestionnaireContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      qs: this.props.qs
    };
    this.addQuestionnaire = this.addQuestionnaire.bind(this);
    this.updateQuestionnaire = this.updateQuestionnaire.bind(this);
    this.deleteQuestionnaire = this.deleteQuestionnaire.bind(this);
  }

  componentDidMount() {
      fetch("http://localhost:8080/flashcard-rest/questionnaires")
      .then(response => response.json())
      .then(json => this.setState({qs: json}));
  }

  addQuestionnaire(questionnaire) {
    questionnaire.description = "some test";
    fetch("http://localhost:8080/flashcard-rest/questionnaires",
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(questionnaire) })
    .then(response => response.json())
    .then(json => {
        var q = this.state.qs;
        q.push(json);
        this.setState({qs: q});
    });

  }

  updateQuestionnaire(questionnaire) {
    fetch("http://localhost:8080/flashcard-rest/questionnaires",
    { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(questionnaire) })
    .then(response => response.json())
    .then(json => {
      var q = this.state.qs;
      q[q.indexOf(questionnaire)] = json;
      this.setState({qs: q});
    });
  }

  deleteQuestionnaire(id) {
    fetch("http://localhost:8080/flashcard-rest/questionnaires/" + id,
    { method: 'DELETE' })
    .then(response => {
      this.setState({qs: this.state.qs.filter(a => a.id !== id)});
    });
  }

  render() {
    return (
      <div className="container">
        <QuestionnaireCreateDialog addQuestionnaire={this.addQuestionnaire} />
        <Table striped bordered>
          <tbody>
            {this.state.qs.map((q) => <ListItem key={q.id} questionnaire={q} updateQuestionnaire={this.updateQuestionnaire} deleteQuestionnaire={this.deleteQuestionnaire} />)}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default QuestionnaireContainer;
