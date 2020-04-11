import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './MessageCard'

const useStyles = makeStyles({
  container: {
    width: '40vh',
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

const TIME_TO_DISAPPEAR = 65000000;

const FadeCard = ({ message, author }) => {
  const { messageContainer } = useStyles();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, TIME_TO_DISAPPEAR);
  }, []);

  return (
    <>
      <Fade when={visible}>
        <Box className={messageContainer}>
          <MessageCard message={message} author={author} />
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

          return message.msg && idx >= indexToShow && <FadeCard key={idx} message={message.msg} author={message.author} />
        })
      }
    </div>
  )
});

export default ChatCard
