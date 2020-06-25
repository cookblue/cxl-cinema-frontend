import React from 'react';
import { QueryParamProvider } from 'use-query-params';

import MessageProvider from './MessageContext/MessageProvider';
import Container from './components/Container/Container';
import VideoContainer from './components/Video/VideoContainer';
import InputMessage from './components/Chat/InputMessage';
import RoomContainer from './components/Room/RoomContainer';
// import WebsocketManager from './components/Ws';

const App = () => {
  return (
    <>
      <QueryParamProvider>
        <MessageProvider>
          <RoomContainer/>
          <Container>
            <VideoContainer />
            <InputMessage />
          </Container>
        </MessageProvider>
      </QueryParamProvider>
    </>
  );
};

export default App;
