import React, { Component } from 'react';
import '../style/VideoDetail.css'

class VideoDetail extends Component {
  render() {
    if (!this.props.video) {
      return <div>loading....</div>
    }
    return (
      <div>
        {this.props.video.snippet.title}
      </div>
    );
  }
}

export default VideoDetail;