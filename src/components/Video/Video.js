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
  const [ playedSeconds, setPlayedSeconds] = useState(0.0);
  const [ player, setPlayer ] = useState(null);
  const { sendMessage, srcVideo, current, time } = useContext(MessageContext);

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, []);

  useEffect(() => {
    if (time !== 0.0) {
      player.seekTo(time);
    }
  }, [time]);

  const pauseHandler = () => {
    current && sendMessage({ msg: '/pause video' });
  };
  const payHandler = () => {
    !current && sendMessage({ msg: '/play video' });
  };

  const readyHandler = (player) => {
    setPlayer(player);
  }

  const progressHandler = (time) => {
    const diffTimes = time.playedSeconds - playedSeconds;
    if (diffTimes > 2 || diffTimes < 0) {
      sendMessage({ msg: '/seek ' + time.playedSeconds })
    }
    setPlayedSeconds(time.playedSeconds);
  }



  return (
    <ReactPlayer
      className={classes.video}
      url={srcVideo || lastVideo}
      playing={current}
      controls
      onProgress={progressHandler}
      onReady={readyHandler}
      onPause={pauseHandler}
      onPlay={payHandler}
    />
  )
};

export default Video
