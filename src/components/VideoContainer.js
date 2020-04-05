import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './ChatCard';
import Video from './Video'

const useStyles = makeStyles({
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: '92vh',
    background: 'black',
    display: 'flex',
  },
})

const VideoContainer = React.forwardRef(({ messages, srcVideo }, ref) => {
  const classes = useStyles()

  return (
    <Box className={classes.videoContainer} >
      <Video srcVideo={srcVideo} />
      <Box style={{ position: 'absolute' }}>
        <ChatCard messages={messages} ref={ref} />
      </Box>
    </Box >
  )
});

export default VideoContainer
