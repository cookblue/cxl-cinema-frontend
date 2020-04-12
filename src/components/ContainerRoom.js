import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Box, Button } from '@material-ui/core';
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'

const useStyles = makeStyles({
  container: {
    background: 'green',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    borderRadius: '10px',
    width: '50vh',
    height: '30vh',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    border: '1px solid #c0c0c0',
    outline: 'none'
  },
  button: {
    textTransform: 'initial',
    width: '155px',
    fontFamily: 'monospace',
    fontSize: '15px',
    border: '1px solid #c0c0c0',
    fontWeight: 'lighter',
    color: '#bbb8b8'
  }
})

const ContainerRoom = () => {
  const classes = useStyles();
  const [flag, setFlag] = useState({
    open: true,
    create: false,
    join: false
  })

  const handleCreate = () => {
    setFlag({
      ...flag,
      create: true,
    })
  }
  const handleJoin = () => {
    setFlag({
      ...flag,
      join: true,
    })
  }

  const handleClose = () => {
    setFlag({
      open: false
    })
  }
  return (
    <Box>
      <Modal
        open={flag.open}
        className={classes.modal}
      >
        {
          flag.create
            ?
            <Box className={classes.box}>
              <CreateRoom close={handleClose} />
            </Box>
            : flag.join
              ?
              <Box className={classes.box}>
                <JoinRoom close={handleClose} />
              </Box>
              :
              <Box className={classes.box}>
                <Button className={classes.button} onClick={handleCreate}>
                  Create a Room
              </Button>
                <Button className={classes.button} onClick={handleJoin}>
                  Join a Room
              </Button>
              </Box>
        }
      </Modal>
    </Box >
  )
};

export default ContainerRoom