import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatarContainer: {
    background: 'transparent',
    display: 'flex',
    margin: '5px'
  },
  avatar: {
    width: 30,
    height: 30
  },
  card: {
    background: '#000000bf',
    display: 'flex',
    opacity: '1',
    wordBreak: 'break-all'
  },
  messageContainer: {
    margin: 'auto 1px',
  },
  message: {
    lineHeight: '1.225',
    display: 'flex',
    margin: '5px',
    padding: '0px 4px',
    fontSize: '0.8rem',
    color: 'white'
  },
  author: {
    lineHeight: '1.225',
    display: 'flex',
    margin: '4px 0px 0px 3px',
    fontSize: '0.8rem',
    color: '#20d0a8',
    fontWeight: 'bold'
  }
});

function MessageCard({ message }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Box className={classes.avatarContainer}>
        <Avatar className={classes.avatar} />
      </Box>
      <Box className={classes.messageContainer}>
        <Typography className={classes.author}>
          Caro:
        </Typography>
        <Typography className={classes.message}>
          {message}
        </Typography>
      </Box>
    </Card >
  )
}

export default MessageCard
