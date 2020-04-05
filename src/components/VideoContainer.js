import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './ChatCard';

const useStyles = makeStyles({
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '92vh',
    background: 'grey',
    display: 'flex',
    flexDirection: 'row'
  },
  video: {
    height: '92vh',
    position: 'relative'
  }
})

const VideoContainer = React.forwardRef(({ messages, srcVideo }, ref) => {
  const classes = useStyles()

  return (
    <Box className={classes.videoContainer} >
      <video controls className={classes.video} >
        <source
          src={srcVideo}
          type="video/mp4" />
      </video>
      <Box style={{ position: 'absolute' }}>
        <ChatCard messages={messages} ref={ref}/>
      </Box>
    </Box >
  )
});

export default VideoContainer
