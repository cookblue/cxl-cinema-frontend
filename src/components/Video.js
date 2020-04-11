import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  video: {
    height: '92vh',
    position: 'absolute',
    width: '100%'
  }
})

const Video = ({ srcVideo }) => {
  const [ lastVideo, setLastVideo ] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setLastVideo(localStorage.getItem('last-video'));
  }, [])

  return (
    <video controls={true} className={classes.video} src={ srcVideo || lastVideo } autoPlay={true}>
      <source
        src={srcVideo || lastVideo}
        type="video/mp4" />
    </video>
  )
};

export default Video
