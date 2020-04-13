import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'
import OptionsMenu from './OptionsMenu'

const useStyles = makeStyles({
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
})

const MenuRoom = ({ close }) => {
  const [flag, setFlag] = useState({
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
  const handleBackMenu = () => {
    setFlag({
      ...flag,
      create: false,
      join: false
    })
  }

  const classes = useStyles()

  return (
    <Box className={classes.box}>
      {
        flag.create
          ?
          <CreateRoom close={close} back={handleBackMenu} />
          : flag.join
            ?
            <JoinRoom close={close} back={handleBackMenu} />
            :
            <OptionsMenu create={handleCreate} join={handleJoin} />
      }
    </Box>
  )
}

export default MenuRoom
