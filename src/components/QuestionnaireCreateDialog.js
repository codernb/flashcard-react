import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class QuestionnaireCreateDialog extends Component {

    constructor(props) {
      super(props);
      this.state = {
        showModal: false
      };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addQuestionnaire = this.addQuestionnaire.bind(this);
    }

    open() {
      this.setState({ showModal: true });
    }

    close() {
      this.setState({ showModal: false });
    }

    handleChange(event) {
      this.setState({title: event.target.value})
    }

    addQuestionnaire() {
      this.props.addQuestionnaire({title: this.state.title});
      this.close();
    }

    render() {
      return(
        <div>
          <Button onClick={this.open}>
            Show
          </Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Create Questionnaire</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" onChange={this.handleChange} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.addQuestionnaire}>Create</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}

export default QuestionnaireCreateDialog;
