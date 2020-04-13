import React, { useContext, useEffect, useState, useRef } from 'react'
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MessageCard from './MessageCard'
import MessageContext from "../../MessageContext/MessageContext";

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

const FadeCard = ({ message, author, color, avatar }) => {
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
          <MessageCard message={message} author={author} color={color} avatar={avatar} />
        </Box>
      </Fade>
    </>);
};

const ChatContainer = () => {
  const classes = useStyles();
  const { messageHistory: messages } = useContext(MessageContext);

  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.scrollTop = 999999999999999999;
    }, 100);
  }, [messages]);

  return (
    <div className={classes.container} ref={containerRef}>
      {
        messages.map((message, idx) => {
          const indexToShow = messages.length > 20 ? messages.length - 20 : 0;

          return message.msg && idx >= indexToShow &&
            <FadeCard key={idx}
              message={message.msg}
              author={message.author}
              color={message.color}
              avatar={message.avatar} />
        })
      }
    </div>
  )
};

export default ChatContainer
