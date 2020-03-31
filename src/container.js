import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ChatCard from './chat-card'
import Input from './input'
import VideoContainer from './video-container'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: ' 100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  chatVideo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh'
  },
})
function Container() {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.chatVideo}>
        <ChatCard />
        <VideoContainer />
      </Box>
      <Input />
    </Box>
  )
}

export default Container