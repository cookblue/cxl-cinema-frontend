import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ChatCard from './ChatCard';

const useStyles = makeStyles({
  videoContainer: {
    width: '100%',
    height: '92vh',
    background: 'gray'
  }
})

function VideoContainer({ messages }) {
  const classes = useStyles()
  return (
    <Box className={classes.videoContainer}>
      <ChatCard messages={messages} />
    </Box>
  )
}

export default VideoContainer
