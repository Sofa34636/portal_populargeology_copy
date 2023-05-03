import React from 'react';
import ReactPlayer from 'react-player'

import './VideoPlayer.scss'

export default function VideoPlayer(props) {

  return (
    <div className='video-container'>
        <ReactPlayer
        className='player'
        url={props.video_url}
        playing={true}
        muted={true}
      />
    </div>
  )
}

