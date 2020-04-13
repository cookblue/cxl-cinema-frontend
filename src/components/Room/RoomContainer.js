import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import MenuRoom from './MenuRoom'

const useStyles = makeStyles({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
})

const RoomContainer = () => {
  const [open, setOpen] = useState(true)

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Modal
      open={open}
      className={classes.modal}
    >
      <MenuRoom close={handleClose} />
    </Modal>
  )
};

export default RoomContainer
