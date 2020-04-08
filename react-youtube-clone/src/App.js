import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

//from api docs: GET https://www.googleapis.com/youtube/v3/search

class App extends Component {
  handleFormSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  }
  
  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
