import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class QuestionnaireUpdateDialog extends Component {

    constructor(props) {
      super(props);
      this.state = {
        showModal: false
      };
      this.bind();
    }

    bind() {
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.updateQuestionnaire = this.updateQuestionnaire.bind(this);
    }

    open() {
      this.setState({ showModal: true });
    }

    close() {
      this.setState({ showModal: false });
    }

    handleChange(event) {
      this.props.questionnaire.title = event.target.value;
    }

    updateQuestionnaire() {
      this.props.updateQuestionnaire(this.props.questionnaire);
      this.close();
    }

    render() {
      return(
        <div>
          <Button onClick={this.open}>
            Update
          </Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Update Questionnaire</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" onChange={this.handleChange} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.updateQuestionnaire}>Update</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}

export default QuestionnaireUpdateDialog;
