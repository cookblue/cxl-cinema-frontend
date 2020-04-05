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
  const [show, setShow] = useState({
    showIn: true,
    showOut: true
  })
  const classes = useStyles()

  function handleClickIn() {
    setShow({
      showIn: false,
    })
  }
  function handleClickOut() {
    setShow({
      showOut: false
    })
  }

  return (
    <Box className={classes.container}>
      <Fade top when={show.showIn}>
        <Box className={classes.messageIn} onClick={handleClickIn}>
          <MessageCard />
        </Box>
      </Fade>
      <Fade top when={show.showOut}>
        <Box className={classes.messageOut} onClick={handleClickOut}>
          <MessageCard />
        </Box>
      </Fade>
    </Box>
  )
}

export default ChatCard
