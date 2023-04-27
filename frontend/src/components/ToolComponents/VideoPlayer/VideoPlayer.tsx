import React from 'react';
import ReactPlayer from 'react-player'

export default function VideoPlayer(props) {
  return <ReactPlayer
    url={props.video_url}
    width={'100%'}
    height={'100%'}
    playing={true}
    muted={true}
  />;
}

