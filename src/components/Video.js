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

const Video = ({ srcVideo }) => {
  const [ lastVideo, setLastVideo ] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, [])

  return (
    <ReactPlayer className={classes.video} url={srcVideo || lastVideo} playing controls />
  )
};

export default Video
