import { useState, useEffect, useMemo } from 'react';
import useWebSocket from 'react-use-websocket';


const WebsocketManager = ({
                            message,
                            roomName,
                            retrieveData,
                            setReadyState
                          }) => {
  const SOCKET_URL = 'wss://mighty-sea-25999.herokuapp.com/ws?room=';
  // const SOCKET_URL = 'ws://localhost:8080/ws?room=';

  const STATIC_OPTIONS = useMemo(() => ({
    onOpen: () => console.log('Connection opened!'),
    share: true,
    shouldReconnect: (closeEvent) => true, //Will attempt to reconnect on all close events, such as server shutting down
  }), []);

  const [url, setUrl] = useState(SOCKET_URL);
  const [sendMessageToSocket, lastMessage, readyState] = useWebSocket(url, STATIC_OPTIONS);

  useEffect(() => {
    if (lastMessage !== null) {
      const last = JSON.parse(lastMessage.data);

      retrieveData(last);
    }
  }, [lastMessage]);

  useEffect(() => {
    if (message) {
      sendMessageToSocket(message);
    }
  }, [message]);

  useEffect(() => {
    if (readyState === 1) {
      setReadyState(true);
    }
  }, [readyState])

  useEffect(() => {
    let intervalID;
    if (roomName) {
      setUrl(SOCKET_URL + roomName)
      intervalID = setInterval(() => {
        sendMessageToSocket(JSON.stringify({ msg: '', room: roomName }));
      }, 30000);
    }

    return () => {
      if (intervalID) clearInterval(intervalID);
    }
  }, [roomName]);


  return null;
}

export default WebsocketManager;
