import React, { Component } from 'react';
import '../style/VideoItem.css'

class VideoItem extends Component {
  render() {
    return (
      <div>
        {this.props.video.snippet.title}
        <img src={this.props.video.snippet.thumbnails.medium.url} alt='' />
      </div>
    );
  }
}

export default VideoItem;