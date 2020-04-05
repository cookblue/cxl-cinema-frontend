import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Container from './components/Container';
import VideoContainer from './components/VideoContainer';

const App = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket('ws://localhost:9899/ws');

  useEffect(() => {
    if (lastMessage !== null) {
      const currentWebSocketUrl = getWebSocket().url;

      console.log(lastMessage.data);
      const newMessage = JSON.parse(lastMessage.data);

      if (messageHistory.length === 20) {
        setMessageHistory(prev => {
          const [, ...rest] = prev;

          return [...rest, newMessage];
        });
      } else {
        setMessageHistory(prev => [...prev, newMessage]);
      }
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
      <div>
        <span>The WebSocket is currently {connectionStatus}</span>
        <input type="text"

                />
        <ul>
          { messageHistory.map((message, idx) => message.msg && <li key={idx}>{message.msg}</li>) }
        </ul>

        <Container sendMessage={sendMessage}>
          <VideoContainer />
        </Container>
      </div>
    </div>
  );
};

export default App;
