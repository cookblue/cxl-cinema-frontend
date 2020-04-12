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
  const classes = useStyles()
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

  return (
    <Box>
      {
        flag.create
          ?
          <Box className={classes.box}>
            <CreateRoom close={close} />
          </Box>
          : flag.join
            ?
            <Box className={classes.box}>
              <JoinRoom close={close} />
            </Box>
            :
            <Box className={classes.box}>
              <OptionsMenu create={handleCreate} join={handleJoin} />
            </Box>
      }
    </Box>
  )
}

export default MenuRoom