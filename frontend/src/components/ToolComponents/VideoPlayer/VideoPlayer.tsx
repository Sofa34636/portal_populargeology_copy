import React, { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';

interface IVideoPlayerProps {
  layoutHide: () => void;
  layoutDisplay: () => void;
  videoUrl: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = (props) => {
  const { videoUrl, layoutHide, layoutDisplay } = props;
  const [isControlsShown, setIsControlsShown] = useState(true);
  const controlsRef = useRef(null);
  const playerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isPlayerPaused, setIsPlayerPaused] = useState(true);
  const [isMouseOverControls, setIsMouseOverControls ]= useState(false);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 1,
  });

  useEffect(() => {
    setVideoState({
      ...videoState,
      playing: false
    });
  }, []);

  const togglePlaying = () => {
    const isPlaying = videoState.playing;
    setVideoState({
      ...videoState,
      playing: !isPlaying
    });
  };

  const handlePlayBack = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 5);
    }
  };

  const handlePlayForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 5);
    }
  };

  const handleMouseMove = () => {
    clearTimeout(timeoutRef.current);
    layoutDisplay();
    setIsControlsShown(true);
    timeoutRef.current = setTimeout(() => {
      if (!isPlayerPaused && !isMouseOverControls) {
        layoutHide();
        setIsControlsShown(false);
      }
    }, 3000);
  };

  const handlePause = () => {
    setIsPlayerPaused(true)
  };

  const handlePlay = () => {
    setIsPlayerPaused(false);
  };

  const handleMouseOverControls = () => {
    setIsMouseOverControls(true);
  };

  const handleMouseLeaveControls = () => {
    setIsMouseOverControls(false);
  };

  return (
    <div className='video-player__wrapper'>
      <div className='video-container' style={isControlsShown ? null : { cursor: 'none' }} onMouseMove={handleMouseMove}>
        <div className='video-container__body'>
          <div className='video-container__controls' ref={controlsRef} style={isControlsShown ? null : { display: 'none' }}>
            <div className='video-container__controls__left-buttons'>
              <span className={'clueLeft'}>-5 сек.</span>
              <svg
                className={'left'}
                onClick={handlePlayBack}
                onMouseOver={handleMouseOverControls}
                onMouseLeave={handleMouseLeaveControls}
                width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M41.25 63.75L22.5 45L41.25 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M67.5 63.75L48.75 45L67.5 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>

            {videoState.playing ? (
              <div className='video-container__controls__pause-button' >
                <svg
                  onClick={togglePlaying}
                  onMouseOver={handleMouseOverControls}
                  onMouseLeave={handleMouseLeaveControls}
                  width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M33.3333 13.3333H20V66.6666H33.3333V13.3333Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M60.0013 13.3335H46.668V66.6668H60.0013V13.3335Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
            ) : (
              <div className='video-container__controls__play-button'>
                <svg onClick={togglePlaying} width='50' height='62' viewBox='0 0 50 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M1.66797 1L48.3346 31L1.66797 61V1Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
            )}

            <div className='video-container__controls__right-buttons'>
              <span className={'clueRight'}>+5 сек.</span>
              <svg
                className={'right'}
                onClick={handlePlayForward}
                onMouseOver={handleMouseOverControls}
                onMouseLeave={handleMouseLeaveControls}
                width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M48.75 63.75L67.5 45L48.75 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M22.5 63.75L41.25 45L22.5 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>
          </div>
        </div>
        <div className={`video-container__overlay ${isControlsShown ? 'active' : ''}`}></div>
        <ReactPlayer
          ref={playerRef}
          height='100%'
          width='100%'
          className='video-container__video'
          url={videoUrl}
          playing={videoState.playing}
          muted={false}
          loop={true}
          onPause={handlePause}
          onPlay={handlePlay}
        />
      </div>
    </div>
  );
};
