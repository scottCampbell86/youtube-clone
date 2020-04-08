import React, { Component } from 'react';
import '../style/VideoList.css';
import VideoItem from './VideoItem';
import uuid from 'uuid/v4'


class VideoList extends Component {

  render() {
    const mappedVideos = this.props.videos.map((video, i) => (
      <VideoItem
        key={ video.id.videoId ? video.id.videoId : uuid() }
        video={video} 
        handleSelectedVideo={this.props.handleSelectedVideo} 
      />
    ))
    return (
      <div className="ui relaxed divided list">
        {mappedVideos}
      </div>
    );
  }
}

export default VideoList;