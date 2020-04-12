import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
  video: {
    width: '100% !important',
    height: 'inherit !important',
    position: 'absolute',
  }
})

const Video = ({ srcVideo, sendMessage, current }) => {
  const [ lastVideo, setLastVideo ] = useState('');
  const [ isPlaying, setIsPlaying ] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, [])

  useEffect(() => {
    setIsPlaying(current);
  }, [current]);

  const pauseHandler = () => {
    isPlaying && sendMessage(JSON.stringify({ msg: '/pause video'  }));
  };
  const payHandler = () => {
    !isPlaying && sendMessage(JSON.stringify({ msg: '/play video'  }));
  };

  return (
    <ReactPlayer className={classes.video} url={srcVideo || lastVideo} playing={isPlaying} controls onPause={pauseHandler} onPlay={payHandler}/>
  )
};

export default Video
