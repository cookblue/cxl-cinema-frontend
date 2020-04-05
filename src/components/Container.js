import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputMessage from './InputMessage'
import VideoContainer from './VideoContainer'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: ' 100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  chatVideo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh'
  },
});

const Container = React.forwardRef(({ children, sendMessage }, ref) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.chatVideo}>
        { children }
      </Box>
      <InputMessage ref={ref} sendMessage={sendMessage} />
    </Box>
  );
});

export default Container
