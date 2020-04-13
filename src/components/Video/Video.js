import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import MessageContext from "../../MessageContext/MessageContext";

const useStyles = makeStyles({
  video: {
    width: '100% !important',
    height: 'inherit !important',
    position: 'absolute',
  }
})

const Video = () => {
  const [lastVideo, setLastVideo] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);

  const { sendMessage, srcVideo, current } = useContext(MessageContext);

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, [])

  useEffect(() => {
    setIsPlaying(current);
  }, [current]);

  const pauseHandler = () => {
    isPlaying && sendMessage(JSON.stringify({ msg: '/pause video' }));
  };
  const payHandler = () => {
    !isPlaying && sendMessage(JSON.stringify({ msg: '/play video' }));
  };

  return (
    <ReactPlayer className={classes.video} url={srcVideo || lastVideo} playing={isPlaying} controls onPause={pauseHandler} onPlay={payHandler} />
  )
};

export default Video
