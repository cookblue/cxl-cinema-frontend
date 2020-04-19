import React, { useContext, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Button, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import MessageContext from '../../MessageContext/MessageContext';

const useStyles = makeStyles({
  root: {
    width: '185px',
    fontFamily: 'monospace',
    fontSize: '15px',
    border: '1px solid #c0c0c0',
    fontWeight: 'lighter',
    color: '#bbb8b8',
    padding: '10px 10px',
    borderRadius: '5px',
  },
  icon: {
    color: 'white'
  },
  box: {
    width: '100%',
    height: '100vh'
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '5vh',
  },
  input: {
    textAlign: 'center'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '25vh'
  },
  btn: {
    color: 'white',
    border: '1px solid #191919',
    fontWeight: 'lighter',
    width: '10vh',
    background: '#8a888cbd',
    borderRadius: '24px'
  }

})
const CreateRoom = ({ close, back }) => {
  const classes = useStyles()

  const { setRoomName } = useContext(MessageContext);

  const createRoom = (ref) => {
    setRoomName(ref.current.value);
    close();
  };

  const inputRef = useRef('');

  return (
    <Box className={classes.box}>
      <Box className={classes.head} >
        <IconButton className={classes.icon} onClick={back} >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box className={classes.body}>
        <InputBase
          classes={{
            root: classes.root,
            input: classes.input
          }}
          placeholder='Create a room name'
          inputRef={inputRef}>
        </InputBase>
        <Button className={classes.btn} onClick={() => createRoom(inputRef)}>
          Create
       </Button>
      </Box>
    </Box>
  )
}

export default CreateRoom
