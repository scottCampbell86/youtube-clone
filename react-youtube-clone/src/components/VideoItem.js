import React, { Component } from 'react';
import '../style/VideoItem.css';


class VideoItem extends Component {

  render() {
    return (
      <div className="video-item item">
        <img 
          onClick={() => this.props.handleSelectedVideo(this.props.video)}
          className="ui image" 
          src={this.props.video.snippet.thumbnails.medium.url} alt='' />
        <div className="content">
          <div className="header">
            {this.props.video.snippet.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;