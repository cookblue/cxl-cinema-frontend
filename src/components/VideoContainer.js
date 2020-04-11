import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './ChatCard';
import Video from './Video'

const useStyles = makeStyles({
  videoContainer: {
    width: '100%',
    height: '92vh',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
  },
  chatContainer: {
    position: 'relative',
    height: '70%',
    display: 'flex',
    marginLeft: 25
  }
});

const VideoContainer = React.forwardRef(({ messages, srcVideo }, ref) => {
  const classes = useStyles()

  return (
    <Box className={classes.videoContainer} >
      <Video srcVideo={srcVideo} />
      <Box className={classes.chatContainer}>
        <ChatCard messages={messages} ref={ref} />
      </Box>
    </Box >
  )
});

export default VideoContainer
