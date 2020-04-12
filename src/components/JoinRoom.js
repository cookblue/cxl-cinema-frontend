import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Button } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    width: '155px',
    fontFamily: 'monospace',
    fontSize: '15px',
    border: '1px solid #c0c0c0',
    fontWeight: 'lighter',
    color: '#bbb8b8'
  }
})
const CreateRoom = ({ close }) => {
  const classes = useStyles()
  return (
    <>
      <InputBase className={classes.input}>

      </InputBase>
      <Button variant='contained' color='secondary' onClick={close}>
        Join
      </Button>
    </>
  )
}

export default CreateRoom