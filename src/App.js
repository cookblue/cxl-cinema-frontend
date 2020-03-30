import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import MessageCard from './message-card';
import ChatCard from './chat-card';

const App = () => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [sendMessage, lastMessage, readyState, getWebSocket] = useWebSocket('ws://localhost:9899/ws');

  useEffect(() => {
    if (lastMessage !== null) {
      const currentWebSocketUrl = getWebSocket().url;

      setMessageHistory(prev => prev.concat(lastMessage));
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

  const submitMessage = ({ target: { value }, charCode }) => {
    if (charCode === 13) {
      sendMessage(JSON.stringify({ msg: value, author: 'anon' }));
      inputMessageRef.current.value = '';
    }
  };


  return (
    <div className="App">
      {/* <div>
        <span>The WebSocket is currently {connectionStatus}</span>
        <input type="text" onKeyPress={submitMessage} ref={inputMessageRef} />
        <div> {lastMessage ? lastMessage.data : null} </div>
        <ul>
          {messageHistory.map((message, idx) => <span key={idx}>{message.data}</span>)}
        </ul>
      </div> */}
      <ChatCard />
    </div>
  );
};

export default App;
