import React, {useState, useEffect, useMemo} from 'react';
import useWebSocket from 'react-use-websocket';

import MessageContext from './MessageContext';

const MessageProvider = ({ children }) => {
  const [srcVideo, setSrcVideo] = useState('');
  const [ current, setCurrent ] = useState(true);
  const [messageHistory, setMessageHistory] = useState([]);

  const STATIC_OPTIONS = useMemo(() => ({
    onOpen: () => console.log('Connection opened!'),
    shouldReconnect: (closeEvent) => true, //Will attempt to reconnect on all close events, such as server shutting down
  }), []);

  // const SOCKET_URL = 'wss://mighty-sea-25999.herokuapp.com/ws';
  const SOCKET_URL = 'ws://localhost:9899/ws?room=default';
  const [sendMessage, lastMessage] = useWebSocket(SOCKET_URL, STATIC_OPTIONS);

  const retrieveMessage = (message) => {
    setMessageHistory(prev => {
      return [...prev, message]
    });
  };

  const retrieveCommand = (message) => {
    if (message.command === 'video') {
      localStorage.setItem('last-video', message.argument);
      setSrcVideo(message.argument);
    }
    if (message.command === 'pause') {
      setCurrent(false);
    }
    if (message.command === 'play') {
      setCurrent(true);
    }
  };

  useEffect(() => {
    if (lastMessage !== null) {
      const last = JSON.parse(lastMessage.data);

      last.msg ? retrieveMessage(last) : retrieveCommand(last);
    }
  }, [lastMessage]);


  return (
    <MessageContext.Provider value={{
      sendMessage,
      messageHistory,
      srcVideo,
      current
    }}>
      { children }
    </MessageContext.Provider>
  )
}

export default MessageProvider;

