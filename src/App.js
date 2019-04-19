import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import List from './components/list';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Container >
        <Header as='h2'>Brastlewark</Header>
        <List url={'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'} />
      </Container>
    );
  }
}

export default App;
