import React, {useContext, useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import MenuRoom from './MenuRoom'
import MessageContext from "../../MessageContext/MessageContext";

const useStyles = makeStyles({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
})

const RoomContainer = () => {
  const [open, setOpen] = useState();

  const { roomName } = useContext(MessageContext);

  useEffect(() => {
    if (roomName) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [ roomName ])

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
