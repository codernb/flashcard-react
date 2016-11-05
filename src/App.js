import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionnaireContainer from './components/QuestionnaireContainer';

class App extends Component {

  constructor(props) {
    super(props);
    QuestionnaireContainer.defaultProps = {
      qs:[
        {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
        {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
        {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
        {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
        {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
      ]
    }
  }

  render() {

    return (
      <div>
        <Header version="1" />

        <QuestionnaireContainer />

        <Footer team="c0d3rnb" />
      </div>
    );
  }

}

export default App;
