import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './MessageCard'

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
});



function ChatCard() {
  const [show, setShow] = useState(true)
  const classes = useStyles()

  function handleClick() {
    setShow(false)
  }

  return (
    <Box className={classes.container}>
      <Fade top when={show}>
        <Box className={classes.messageIn} onClick={handleClick}>
          <MessageCard />
        </Box>
      </Fade>
      <Fade top when={show}>
        <Box className={classes.messageOut} onClick={handleClick}>
          <MessageCard />
        </Box>
      </Fade>
    </Box>
  )
}

export default ChatCard
