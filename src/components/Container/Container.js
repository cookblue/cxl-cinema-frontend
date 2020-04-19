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
  }
});

const Container = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      { children }
    </Box>
  );
};

export default Container
