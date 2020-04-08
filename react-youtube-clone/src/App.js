import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'

//from api docs: GET https://www.googleapis.com/youtube/v3/search

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: ''
  }

  handleFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    //console.log(response)
    this.setState({ videos: response.data.items })
  }

  handleSelectedVideo = (video) => {
    this.setState({ selectedVideo: video})
    //console.log(`CLICK HEARD: ${video}`)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} handleSelectedVideo = {this.handleSelectedVideo} />
      </div>
    );
  }
}

export default App;
