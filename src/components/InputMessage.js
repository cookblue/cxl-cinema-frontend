import React, {useRef} from 'react'
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

const InputMessage = React.forwardRef(({ sendMessage }) => {
  const classes = useStyles();

  const inputMessageRef = useRef('');

  const submitMessage = ({ value, charCode }, ref) => {
    if (charCode === 13 && value.trim() !== '') {
      sendMessage(JSON.stringify({ msg: value, author: 'anon' }));
      ref.current.value = '';
    }
  };
  return (
    <Box className={classes.containerInput}>
      <IconButton className={classes.emoji} aria-label='emoji'>
        <MoodIcon size='small' />
      </IconButton>
      <InputBase className={classes.input}
                 placeholder='Write a message'
                 onKeyPress={({ target: { value }, charCode }) => submitMessage({ value, charCode }, inputMessageRef)}
                 inputRef={inputMessageRef}/>
      <IconButton className={classes.submit} aria-label='send'>
        <SendIcon size='small' />
      </IconButton>
    </Box>
  )
});

export default InputMessage
