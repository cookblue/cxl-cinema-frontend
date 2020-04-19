import React, {useState, useEffect, useMemo} from 'react';
import useWebSocket from 'react-use-websocket';

import MessageContext from './MessageContext';

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const MessageProvider = ({ children }) => {
  const [ url, setUrl ] = useState('wss://echo.websocket.org');
  const [srcVideo, setSrcVideo] = useState('');
  const [ current, setCurrent ] = useState(true);
  const [ roomName, setRoomName ] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const STATIC_OPTIONS = useMemo(() => ({
    onOpen: () => console.log('Connection opened!'),
    share: true,
    shouldReconnect: (closeEvent) => true, //Will attempt to reconnect on all close events, such as server shutting down
  }), []);

  const SOCKET_URL = 'wss://mighty-sea-25999.herokuapp.com/ws?room=';
  // const SOCKET_URL = 'ws://localhost:9899/ws?room=';

  const [sendMessageToSocket, lastMessage, readyState] = useWebSocket(url, STATIC_OPTIONS);

  useEffect(() => {
    if (roomName) {
      setUrl(SOCKET_URL + roomName)
      setInterval(() => {
        sendMessageToSocket(JSON.stringify({ msg: '' }));
      }, 30000);
    }
  }, [roomName])

  useEffect(() => {
    if (lastMessage !== null) {
      const last = JSON.parse(lastMessage.data);

      last.msg ? retrieveMessage(last) : retrieveCommand(last);
    }
  }, [lastMessage]);

  const retrieveMessage = (message) => {
    setMessageHistory(prev => {
      if (prev.length > 25) {
        const [, ...rest] = prev;

        return [...rest, { ...message, id: uuidv4() }];
      }

      return [...prev, { ...message, id: uuidv4() }]
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

  const sendMessage = (message) => {
    sendMessageToSocket(JSON.stringify({ ...message, room: roomName }));
  }

  return (
    <MessageContext.Provider value={{
      sendMessage,
      messageHistory,
      srcVideo,
      current,
      roomName,
      setRoomName,
      readyState,
    }}>
      { children }
    </MessageContext.Provider>
  )
}

export default MessageProvider;

