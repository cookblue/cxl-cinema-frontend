import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Button, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  input: {
    width: '185px',
    fontFamily: 'monospace',
    fontSize: '15px',
    border: '1px solid #c0c0c0',
    fontWeight: 'lighter',
    color: '#bbb8b8',
    padding: '10px 10px',
    borderRadius: '5px'
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
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '25vh'
  },

})
const CreateRoom = ({ close, back }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Box className={classes.head} >
        <IconButton className={classes.icon} onClick={back} >
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box className={classes.body}>
        <InputBase className={classes.input} placeholder='Create a room name'>
        </InputBase>
        <Button variant='contained' color='secondary' onClick={close}>
          Create
       </Button>
      </Box>
    </Box>
  )
}

export default CreateRoom