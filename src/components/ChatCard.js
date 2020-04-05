import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './MessageCard'

const useStyles = makeStyles({
  container: {
    width: '40vh',
    height: '80vh',
    background: 'transparent',
    display: 'flex',
    overflow: 'scroll',
    flexDirection: 'column'
  },
  messageContainer: {
    margin: '8px 5px 0px 5px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
});


const FadeCard = ({ message }) => {
  const { messageContainer } = useStyles();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 500000)
  }, []);

  return (
    <>
      <Fade top when={visible}>
        <Box className={messageContainer}>
          <MessageCard message={message} />
        </Box>
      </Fade>
    </>);
};

function ChatCard({ messages }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {
        messages.map((message, idx) => {
          return message.msg && <FadeCard key={idx} message={message.msg} />
        })
      }
    </Box>
  )
}

export default ChatCard
