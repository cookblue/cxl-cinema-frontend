import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  containerInput: {
    width: '100%',
    height: '100vh',
    background: '#a9a7a78f',
    display: 'flex',
    flexDirection: 'row'
  },
  emoji: {
    width: '5%',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    width: '5%',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '90%',

  }
})

function InputMessage({ ref }) {
  const classes = useStyles();

  return (
    <Box className={classes.containerInput}>
      <IconButton className={classes.emoji} aria-label='emoji'>
        <MoodIcon size='small' />
      </IconButton>
      <InputBase className={classes.input} placeholder='Write a message' ref={ref}/>
      <IconButton className={classes.submit} aria-label='send'>
        <SendIcon size='small' />
      </IconButton>
    </Box>
  )
}

export default InputMessage
