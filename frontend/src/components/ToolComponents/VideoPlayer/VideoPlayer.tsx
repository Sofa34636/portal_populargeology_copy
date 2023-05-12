import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useThrottle from '../../../hooks/useThrottle';

import './VideoPlayer.scss';

import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function VideoPlayer(props) {
  const [isControlsShown, setIsControlsShown] = useState(true);
  const lastMouseMoveTimeRef = useRef(Date.now());

  const handleMouseMove = useThrottle(() => {
    setIsControlsShown(true);
    lastMouseMoveTimeRef.current = Date.now();
  }, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMouseMoveTimeRef.current > 3000) {
        setIsControlsShown(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="video-container"
      onMouseMove={handleMouseMove}
      style={{ cursor: isControlsShown ? 'default' : 'none' }}
    >
      <div className="video-container__body">
        <div
          className="video-container__controls"
          style={isControlsShown ? null : { display: 'none' }}
        >
          <div className={'video-container__controls__left-buttons'}>
            <svg width='22' height='40' viewBox='0 0 22 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20.25 38.75L1.5 20L20.25 1.25'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>


            <svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 38.75L1.5 20L20.25 1.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div className={'video-container__controls__play-button'}>
            <svg width="50" height="62" viewBox="0 0 50 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66797 1L48.3346 31L1.66797 61V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className={'video-container__controls__right-buttons'}>
            <svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75 38.75L20.5 20L1.75 1.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 38.75L20.25 20L1.5 1.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
        <div className='video-container__overlay'></div>
        <ReactPlayer
          className='video-container__video'
          width="100%"
          url={props.video_url}
          playing={true}
          muted={true}
        />
    </div>
  )
}

