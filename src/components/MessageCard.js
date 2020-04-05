import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles.js'

function MessageCard({ message }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Box className={classes.avatar}>
        <Avatar>
        </Avatar>
      </Box>
      <Box className={classes.messageContainer}>
        <Typography className={classes.message}>
          { message }
        </Typography>
      </Box>
    </Card >
  )
}

export default MessageCard
