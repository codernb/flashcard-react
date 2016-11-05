import React, { Component } from 'react';
import ListItem from './ListItem';
import Grid from 'react-bootstrap/lib/Grid';

class QuestionnaireContainer extends Component {

  render() {
    return (
      <div className="container">
        <Grid>
          {this.props.qs.map((q) => <ListItem key={q.id} questionnaire={q} />)}
        </Grid>
      </div>
    );
  }

}

export default QuestionnaireContainer;
