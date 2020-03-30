import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './message-card'

const useStyles = makeStyles({
  container: {
    width: '60vh',
    height: '93vh',
    background: '#fcfbfe',
    border: '1px solid #fcfbfe '
  },
})


function ChatCard() {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <MessageCard />
    </Box>
  )
}

export default ChatCard