import React, { useState, useEffect, useRef, useMemo } from 'react';
import useWebSocket from 'react-use-websocket';

import Container from './components/Container';
import VideoContainer from './components/VideoContainer';
import InputMessage from './components/InputMessage';

const App = () => {
  const [srcVideo, setSrcVideo] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const SOCKET_URL = 'wss://mighty-sea-25999.herokuapp.com/ws';

  const STATIC_OPTIONS = useMemo(() => ({
    onOpen: () => console.log('Connection opened!'),
    shouldReconnect: (closeEvent) => true, //Will attempt to reconnect on all close events, such as server shutting down
  }), []);

  const [sendMessage, lastMessage] = useWebSocket(SOCKET_URL, STATIC_OPTIONS);

  const containerRef = useRef('');

  const retrieveMessage = (message, containerRef) => {
    setMessageHistory(prev => {
      return [...prev, message]
    });

    setTimeout(() => {
      containerRef.current.scrollTop = 10000000000000000000000;
    }, 150);
  };

  const retrieveCommand = (message) => {
    if (message.command === 'video') {
      console.log(message.argument);
      localStorage.setItem('last-video', message.argument);
      setSrcVideo(message.argument);
    }
  };

  useEffect(() => {
    if (lastMessage !== null) {
      const last = JSON.parse(lastMessage.data);

      last.msg ? retrieveMessage(last, containerRef) : retrieveCommand(last);
    }
  }, [lastMessage]);

  return (
    <div className="App">
      <Container
        inputMessage={<InputMessage sendMessage={sendMessage} />}
        videoContainer={<VideoContainer messages={messageHistory} srcVideo={srcVideo} ref={containerRef} />} />
    </div>
  );
};

export default App;
