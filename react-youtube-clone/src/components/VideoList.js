import React, { Component } from 'react';
import '../style/VideoList.css';
import VideoItem from './VideoItem';
import parse from 'html-react-parser';

class VideoList extends Component {

  render() {
    const mappedVideos = this.props.videos.map((video, i) => (
      <VideoItem video={video} key={i} handleSelectedVideo={this.props.handleSelectedVideo} />
    ))
    return (
      <div className="ui relaxed divided list">
        {mappedVideos}
      </div>
    );
  }
}

export default VideoList;