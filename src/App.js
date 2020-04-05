import React, { useState, useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';

import Container from './components/Container';
import VideoContainer from './components/VideoContainer';
import InputMessage from './components/InputMessage';

const App = () => {
  const [srcVideo, setSrcVideo] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [sendMessage, lastMessage] = useWebSocket('ws://localhost:9899/ws');

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
        videoContainer={<VideoContainer messages={messageHistory} srcVideo={srcVideo} ref={containerRef}/>} />
    </div>
  );
};

export default App;
