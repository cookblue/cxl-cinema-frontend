import React from 'react';
import MessageProvider from "./MessageContext/MessageProvider";

import Container from './components/Container';
import VideoContainer from './components/VideoContainer';
import InputMessage from './components/InputMessage';
import ContainerRoom from './components/ContainerRoom'

const App = () => {
  return (
    <MessageProvider>
      <ContainerRoom />
      <Container
        inputMessage={<InputMessage />}
        videoContainer={<VideoContainer />}
      />
    </MessageProvider>
  );
};

export default App;
