import React, { Component } from 'react';
import '../style/VideoList.css'

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.videos.length}
      </div>
    );
  }
}

export default VideoList;