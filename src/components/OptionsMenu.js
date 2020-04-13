import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    textTransform: 'initial',
    width: '155px',
    fontFamily: 'monospace',
    fontSize: '15px',
    border: '1px solid #c0c0c0',
    fontWeight: 'lighter',
    color: '#bbb8b8'
  },
})

const OptionsMenu = ({ create, join }) => {
  const classes = useStyles()
  return (
    <>
      <Button className={classes.button} onClick={create}>
        Create a Room
      </Button>
      <Button className={classes.button} onClick={join}>
        Join a Room
      </Button>
    </>
  )
}

export default OptionsMenu