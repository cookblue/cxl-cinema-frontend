import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoContainer: {
    width: '100%',
    height: 'auto',
    background: 'black'
  }
})

function VideoContainer() {
  const classes = useStyles()
  return (
    <Box className={classes.videoContainer}>

    </Box>
  )
}

export default VideoContainer