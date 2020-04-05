import React, { useEffect, useRef, useState } from 'react'
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

const TIME_TO_DISAPPEAR = 100000;

const FadeCard = ({ message }) => {
  const { messageContainer } = useStyles();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, TIME_TO_DISAPPEAR);
  }, [message]);

  return (
    <>
      <Fade top when={visible}>
        <Box className={messageContainer}>
          <MessageCard message={message} />
        </Box>
      </Fade>
    </>);
};

const ChatCard = React.forwardRef(({ messages }, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.container} ref={ref}>
      {
        messages.map((message, idx) => {
          const indexToShow = messages.length > 20 ? messages.length - 20 : 0;

          return message.msg && idx >= indexToShow && <FadeCard key={idx} message={message.msg} />
        })
      }
    </div>
  )
});

export default ChatCard
