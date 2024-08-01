import React, { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

interface IVideoPlayerProps {
  layoutHide: () => void;
  layoutDisplay: () => void;
  videoUrl: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = (props) => {
  const { videoUrl, layoutHide, layoutDisplay } = props;
  const [isControlsShown, setIsControlsShown] = useState(true);
  const controlsRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null);
  const timeoutRef = useRef<number | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlayerPaused, setIsPlayerPaused] = useState(true);
  const [isMouseOverControls, setIsMouseOverControls] = useState(false);

  const [videoState, setVideoState] = useState(() => ({
    playing: false,
    muted: false,
    volume: 1,
  }));

  const togglePlaying = () => {
    setVideoState((prevState) => ({
      ...prevState,
      playing: !prevState.playing,
    }));
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const enterFullscreen = () => {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer && videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handlePlayBack = () => {
    if (playerRef.current) {

      const newTime = playerRef.current.getCurrentTime() - 5;
      playerRef.current.seekTo(newTime, 'seconds');

    }
  };

  const handlePlayForward = () => {
    if (playerRef.current) {

      const newTime = playerRef.current.getCurrentTime() + 5;
      playerRef.current.seekTo(newTime, 'seconds');

    }
  };



  const handleProgress = (progress: { playedSeconds: number }) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleMouseMove = () => {
    clearTimeout(timeoutRef.current);
    layoutDisplay();
    setIsControlsShown(true);
    timeoutRef.current = window.setTimeout(() => {
      if (!isPlayerPaused && !isMouseOverControls) {
        layoutHide();
        setIsControlsShown(false);
      }
    }, 2000);
  };

  const handlePause = () => {
    setIsPlayerPaused(true);
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

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault(); // Prevent the default behavior of the spacebar
      togglePlaying(); // Toggle the playing state of the video
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      handlePlayForward();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      handlePlayBack();
    }
  };



  useEffect(() => {

    document.addEventListener('keydown', handleKeyDown, true);

    setVideoState({
      ...videoState,
      playing: false
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);



  return (
    <div className='video-player__wrapper no_select '>
      <div className='video-container' style={isControlsShown ? null : { cursor: 'none' }} onMouseMove={handleMouseMove}>
        <div className='video-container__body'>
          <div className='video-container__controls' tabIndex={0} ref={controlsRef} style={isControlsShown ? null : { display: 'none' }}>
            <div className='video-container__controls__left-buttons'>
              <span className='clueLeft'>-5 сек.</span>
              <svg
                className='left'
                onClick={handlePlayBack}
                onMouseOver={handleMouseOverControls}
                onMouseLeave={handleMouseLeaveControls}
                width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M41.25 63.75L22.5 45L41.25 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M67.5 63.75L48.75 45L67.5 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </div>

            {videoState.playing ? (
              <div className='video-container__controls__pause-button'>
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
              <span className='clueRight'>+5 сек.</span>
              <svg
                className='right'
                onClick={handlePlayForward}
                onMouseOver={handleMouseOverControls}
                onMouseLeave={handleMouseLeaveControls}
                width='90' height='90' viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M48.75 63.75L67.5 45L48.75 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M22.5 63.75L41.25 45L22.5 26.25' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
              <div
                className={`fullscreen-button ${isFullscreen ? 'active' : ''}`}
                onClick={toggleFullscreen}
                onMouseOver={handleMouseOverControls}
                onMouseLeave={handleMouseLeaveControls}
              >
                {isFullscreen ? (
                    <FullscreenExitIcon/>

                ) : (
                  <FullscreenIcon/>
                )}
              </div>
              <div className={`fullscreen-button ${isFullscreen ? 'active' : ''}`} onClick={toggleFullscreen} onMouseOver={handleMouseOverControls} onMouseLeave={handleMouseLeaveControls}>
              {isFullscreen ? (
                <FullscreenExitIcon />
              ) : (
                <FullscreenIcon />
              )}
            </div>
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
          loop={false}
          onPause={handlePause}
          onPlay={handlePlay}
          onProgress={handleProgress}
        />


      </div>
    </div>
  );
};
