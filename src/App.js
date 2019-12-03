import React from "react";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./config/reactotron";
=======
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';
>>>>>>> 7db3698dbd12415d01f0d17785831d95562ec065

import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

<<<<<<< HEAD
import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
=======
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
>>>>>>> 7db3698dbd12415d01f0d17785831d95562ec065
);

export default App;
