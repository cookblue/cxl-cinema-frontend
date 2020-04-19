import React, { useContext, useRef } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';

import MessageContext from "../../MessageContext/MessageContext";

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

const validInternCommands = ['name'];

const palette = [
  '#0baf15', '#FD5B78', '#FF6037',
  '#FF9966', '#FF9933', '#FFCC33',
  '#FFFF66', '#CCFF00', '#66FF66',
  '#50BFE6', '#FF6EFF', '#20d0a8'];

const myColor = palette[Math.round(Math.random() * palette.length)];

const InputMessage = () => {
  const { sendMessage, readyState } = useContext(MessageContext);
  const classes = useStyles();

  const inputMessageRef = useRef('');

  const commandHandler = (validInternCommands, command) => {
    const [, internCommand, argument] = command.match(/^\/(\w*)\s(.*)/);

    if (validInternCommands.includes(internCommand)) {
      if (internCommand === 'name') {
        localStorage.setItem('user-name', argument);
      }
    }
  }

  const submitMessage = ({ value, charCode }, inputRef) => {
    const message = value.trim();

    if (charCode === 13 && message !== '' && readyState === 1) {
      const isNameCommand = message.split('/name')[1];

      if (isNameCommand) {
        commandHandler(validInternCommands, message);
      } else {
        sendMessage({ msg: message, color: myColor, author: localStorage.getItem('user-name') || 'Anonymous' });
      }

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
        onKeyPress={({ target: { value }, charCode }) => submitMessage({ value, charCode }, inputMessageRef)}
        inputRef={inputMessageRef} />
      <IconButton className={classes.submit} aria-label='send'>
        <SendIcon size='small' />
      </IconButton>
    </Box>
  )
};

export default InputMessage
