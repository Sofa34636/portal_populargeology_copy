import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import useThrottle from '../../../hooks/useThrottle'

import './VideoPlayer.scss'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import PlayArrowIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseIcon from '@mui/icons-material/PauseOutlined';
export default function VideoPlayer(props) {
  const [isControlsShown, setIsControlsShown] = useState(true);
  const controlsRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
  });

  const togglePlaying = () => {
    const isPlaying = videoState.playing
    setVideoState({
      ...videoState,
      playing: !isPlaying
    })
  }

  useEffect(() => {
    const hideControlsTimer = setTimeout(() => {

      setIsControlsShown(false);
      props.layoutHide()
    }, 4500);

    return () => {
      clearTimeout(hideControlsTimer);
    };
  }, [isControlsShown]);

  const handleMouseMove = () => {

    setIsControlsShown(true);
    props.layoutDisplay()
  };

  const handleMouseLeave = () => {

    const hideControlsTimer = setTimeout(() => {
      setIsControlsShown(false);
      props.layoutHide()
    }, 4000);
    return () => {
      clearTimeout(hideControlsTimer);
    };
  };


  return (
    <div className='video-player__wrapper' >
    <div className='video-container' style={isControlsShown ? null : {cursor: 'none'}} >
      <div className='video-container__body' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className='video-container__controls' ref={controlsRef} style={isControlsShown ? null : { display: 'none' }}>
          <div className={'video-container__controls__left-buttons'}>
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.25 63.75L22.5 45L41.25 26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M67.5 63.75L48.75 45L67.5 26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          {
            videoState.playing ?

              <div className={'video-container__controls__pause-button'} onClick={togglePlaying}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.3333 13.3333H20V66.6666H33.3333V13.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M60.0013 13.3335H46.668V66.6668H60.0013V13.3335Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>

            :
              <div className={'video-container__controls__play-button'} onClick={togglePlaying}>
                <svg width="50" height="62" viewBox="0 0 50 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66797 1L48.3346 31L1.66797 61V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
          }


          <div className={'video-container__controls__right-buttons'}>
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.75 63.75L67.5 45L48.75 26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 63.75L41.25 45L22.5 26.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </div>
      </div>
        <div  className={`video-container__overlay ${isControlsShown ? 'active' : ''}`}></div>
        <ReactPlayer
          className='video-container__video'
          width="100%"
          url={props.video_url}
          playing={videoState.playing}
          muted={false}
        />
    </div>
    </div>
  )
}

