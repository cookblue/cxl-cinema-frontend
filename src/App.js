import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Container from './components/Container'

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

  const inputMessageRef = useRef('');

  const submitMessage = ({ value, charCode }, ref) => {
    if (charCode === 13 && value.trim() !== '') {
      sendMessage(JSON.stringify({ msg: value, author: 'anon' }));
      ref.current.value = '';
    }
  };

  return (
    <div className="App">
      {/*<div>*/}
      {/*  <span>The WebSocket is currently {connectionStatus}</span>*/}
      {/*  <input type="text"*/}
      {/*         onKeyPress={({ target: { value }, charCode }) => submitMessage({ value, charCode }, inputMessageRef)}*/}
      {/*         ref={inputMessageRef} />*/}
      {/*  <ul>*/}
      {/*    { messageHistory.map((message, idx) => message.msg && <li key={idx}>{message.msg}</li>) }*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <Container />

    </div>
  );
};

export default App;
