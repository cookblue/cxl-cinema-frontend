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
  const [ lastVideo, setLastVideo ] = useState('');

  const { sendMessage, srcVideo, current } = useContext(MessageContext);

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, [])

  const pauseHandler = () => {
    current && sendMessage({ msg: '/pause video'  });
  };
  const payHandler = () => {
    !current && sendMessage({ msg: '/play video'  });
  };

  return (
    <ReactPlayer className={classes.video} url={srcVideo || lastVideo} playing={current} controls onPause={pauseHandler} onPlay={payHandler}/>
  )
};

export default Video
