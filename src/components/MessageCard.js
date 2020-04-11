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
    background: '#0000007d',
    display: 'flex',
    opacity: '1',
    wordBreak: 'break-all'
  },
  messageContainer: {
    margin: 'auto 4px',
  },
  message: {
    lineHeight: '1.225',
    display: 'flex',
    margin: '5px 0px',
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

function MessageCard({ message, author }) {
  const classes = useStyles()
  const colors = ['#0baf15', '#FD5B78', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#FFFF66', '#CCFF00', '#66FF66', '#50BFE6', '#FF6EFF', '#EE34D2', '#FF00CC', '#20d0a8'];

  return (
    <Card className={classes.card}>
      <Box className={classes.avatarContainer}>
        <Avatar className={classes.avatar} />
      </Box>
      <Box className={classes.messageContainer}>
        <Typography className={classes.author} style={{ color: colors[9] }}>
          {author}
        </Typography>
        <Typography className={classes.message}>
          {message}
        </Typography>
      </Box>
    </Card >
  )
}

export default MessageCard
