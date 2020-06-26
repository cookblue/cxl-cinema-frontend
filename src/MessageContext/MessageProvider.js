import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import MessageContext from './MessageContext';
import WebsocketManager from '../components/Ws';

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const MessageProvider = ({ children }) => {
  const [srcVideo, setSrcVideo] = useState('');
  const [ time, setTime] = useState(0.0);
  const [ current, setCurrent ] = useState(true);
  const [ roomName, setRoomName ] = useState('');
  const [ message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const [ readyState, setReadyState] = useState(false);

  const [queryRoom] = useQueryParam('room', StringParam);

  const retrieveData = (data) => {
    data.msg ? retrieveMessage(data) : retrieveCommand(data);
  }

  useEffect(() => {
    if (queryRoom) {
      setRoomName(queryRoom);
    }
  }, [queryRoom])

  const retrieveMessage = (message) => {
    setMessageHistory(prev => {
      if (prev.length > 25) {
        const [, ...rest] = prev;

        return [...rest, { ...message, id: uuidv4() }];
      }

      return [...prev, { ...message, id: uuidv4() }]
    });
  };

  const retrieveCommand = ({ command, argument }) => {
    if (command === 'video') {
      localStorage.setItem('last-video', argument);
      setSrcVideo(argument);
    }
    if (command === 'pause') {
      setCurrent(false);
    }
    if (command === 'play') {
      setCurrent(true);
    }

    if (command === 'seek') {
      setTime(argument);
    }
  };

  const sendMessage = (message) => {
    // The id here shout be generated in the backend side.
    setMessage(JSON.stringify({ ...message, id: uuidv4(), room: roomName }));
  }

  return (
    <MessageContext.Provider value={{
      sendMessage,
      messageHistory,
      srcVideo,
      current,
      time,
      roomName,
      setRoomName,
      readyState
    }}>
      { children }
      {
        roomName ?
          <WebsocketManager
            roomName={roomName}
            retrieveData={retrieveData}
            message={message}
            setReadyState={setReadyState}
          /> : <></>
      }
    </MessageContext.Provider>
  )
}

export default MessageProvider;

