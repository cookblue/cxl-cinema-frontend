import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './chat-card';

const useStyles = makeStyles({
  videoContainer: {
    width: '100%',
    height: '92vh',
    background: 'black'
  }
})

function VideoContainer() {
  const classes = useStyles()
  return (
    <Box className={classes.videoContainer}>
      <ChatCard />

    </Box>
  )
}

export default VideoContainer