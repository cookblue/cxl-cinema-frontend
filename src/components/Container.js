import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: ' 100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'black'
  },
  chatVideo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh'
  },
});

const Container = ({videoContainer, inputMessage }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.chatVideo}>
        {videoContainer}
      </Box>
      {inputMessage}
    </Box>
  );
};

export default Container
