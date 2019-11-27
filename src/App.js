import React , { Fragment } from 'react';

import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Content } from './components/Sidebar/styles';


const App = () => (
  <Wrapper>
    <GlobalStyle />
      <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;