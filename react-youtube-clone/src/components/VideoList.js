import React, { Component } from 'react';
import '../style/VideoList.css';
import VideoItem from './VideoItem'

class VideoList extends Component {

  render() {
    const mappedVideos = this.props.videos.map((video, i) => (
      <VideoItem key={i} />
    ))
    return (
      <div>
        {mappedVideos}
      </div>
    );
  }
}

export default VideoList;