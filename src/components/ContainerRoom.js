import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Box, Button } from '@material-ui/core';


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
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Box className={classes.box}>
          <Button className={classes.button}>
            Create a Room
          </Button>
          <Button className={classes.button}>
            Join a Room
          </Button>
        </Box>
      </Modal>
    </Box >
  )
};

export default ContainerRoom