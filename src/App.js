import React, { Component } from 'react';
import List from './components/list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Brastlewark
          </p>
        <List url={'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'} perPage={10}/>
        </header>
      </div>
    );
  }
}

export default App;
