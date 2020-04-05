import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './message-card'

const useStyles = makeStyles({
  container: {
    width: '40vh',
    height: '93vh',
    background: 'transparent',
    border: '1px solid #fcfbfe '
  },
  messageIn: {
    margin: '8px 0px 0px 5px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  messageOut: {
    margin: '8px 0px 0px 5px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
})



function ChatCard() {
  const [show, setShow] = useState(false)
  const classes = useStyles()

  function handleClick() {
    setShow(true)
  }

  return (
    <Box className={classes.container} onClick={handleClick}>
      <Fade top when={show}>
        <Box className={classes.messageIn}>
          <MessageCard />
        </Box>
        <Box className={classes.messageOut}>
          <MessageCard />
        </Box>
        <Box className={classes.messageIn}>
          <MessageCard />
        </Box>
      </Fade>
    </Box>
  )
}

export default ChatCard