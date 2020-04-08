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

  componentDidMount = async () => {
    await this.handleFormSubmit(`today's news`)
  }

  handleFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    //console.log(response)
    this.setState({ 
      selectedVideo: response.data.items[0],
      videos: response.data.items 
    })
  }

  handleSelectedVideo = (video) => {
    this.setState({ selectedVideo: video})
    //console.log(`CLICK HEARD: ${video}`)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <div className="ui grid">
          <div className="ui row">    
            <div className="eleven wide column"> 
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} handleSelectedVideo = {this.handleSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
