import React, {useRef} from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  containerInput: {
    width: '35%',
    background: '#0d0d0d',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #5a5a5a',
    borderRadius: '5px',
    margin: '10px auto'
  },
  emoji: {
    width: '50px',
    background: 'transparent',
    color: '#c0c0c0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    width: '50px',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c0c0c0'
  },
  input: {
    width: '95%',
    color: '#c0c0c0',
  }
});

const InputMessage = ({ sendMessage } ) => {
  const classes = useStyles();

  const inputMessageRef = useRef('');

  const submitMessage = ({ value, charCode }, inputRef) => {
    if (charCode === 13 && value.trim() !== '') {
      sendMessage(JSON.stringify({ msg: value, author: localStorage.getItem('user-name') || 'anon' }));
      inputRef.current.value = '';
    }
  };
  return (
    <Box className={classes.containerInput}>
      <IconButton className={classes.emoji} aria-label='emoji'>
        <MoodIcon size='small' />
      </IconButton>
      <InputBase className={classes.input}
                 placeholder='Write a message'
                 onKeyPress={({ target: { value }, charCode }) => submitMessage({ value, charCode }, inputMessageRef )}
                 inputRef={inputMessageRef}/>
      <IconButton className={classes.submit} aria-label='send'>
        <SendIcon size='small' />
      </IconButton>
    </Box>
  )
};

export default InputMessage
