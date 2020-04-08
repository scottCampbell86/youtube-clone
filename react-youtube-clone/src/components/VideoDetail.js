import React, { Component } from 'react';
import '../style/VideoDetail.css'

class VideoDetail extends Component {

  render() {
    if (!this.props.video) {
      return <div>loading....</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
   
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="video player"/>
        </div>
        <div className="ui segment">
          <h4 className="header">{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;