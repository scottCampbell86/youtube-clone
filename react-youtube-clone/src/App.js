import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
