import React from 'react';

import MessageProvider from './MessageContext/MessageProvider';
import Container from './components/Container/Container';
import VideoContainer from './components/Video/VideoContainer';
import InputMessage from './components/Chat/InputMessage';
import RoomContainer from './components/Room/RoomContainer';

const App = () => {

  return (
    <>
      <MessageProvider>
        <RoomContainer/>
        <Container
          inputMessage={<InputMessage />}
          videoContainer={<VideoContainer />}
       />
      </MessageProvider>
    </>
  );
};

export default App;
