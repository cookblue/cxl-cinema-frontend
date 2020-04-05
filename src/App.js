import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Container from './components/Container';
import VideoContainer from './components/VideoContainer';
import InputMessage from './components/InputMessage';

const App = () => {
  const [srcVideo, setSrcVideo] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket('ws://bb16f54a.ngrok.io/ws');

  const retrieveMessage = (message) => {
    if (messageHistory.length === 20) {
      setMessageHistory(prev => {
        const [, ...rest] = prev;

        return [...rest, message];
      });
    } else {
      setMessageHistory(prev => [...prev, message]);
    }
  };

  const retrieveCommand = (message) => {
    if (message.command === 'video') {
      setSrcVideo(message.argument);
    }
  };


  useEffect(() => {
    if (lastMessage !== null) {
      const currentWebSocketUrl = getWebSocket().url;

      const last = JSON.parse(lastMessage.data);

      last.msg ? retrieveMessage(last) : retrieveCommand(last);
    }
  }, [getWebSocket, lastMessage]);

  console.log(readyState);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
  }[readyState];

  return (
    <div className="App">
      <Container
        inputMessage={<InputMessage sendMessage={sendMessage} />}
        videoContainer={<VideoContainer messages={messageHistory} srcVideo={srcVideo} />} />
    </div>
  );
};

export default App;
