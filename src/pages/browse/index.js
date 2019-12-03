import React from 'react';

import { Container, Tittle, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Tittle>Navegar</Tittle>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="foto-album"/>
        <strong>Melhores do Rock</strong>
        <p>Programe sem se estressar, ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="foto-album"/>
        <strong>Melhores do Rock</strong>
        <p>Programe sem se estressar, ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="foto-album"/>
        <strong>Melhores do Rock</strong>
        <p>Programe sem se estressar, ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="foto-album"/>
        <strong>Melhores do Rock</strong>
        <p>Programe sem se estressar, ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
    </List>
  </Container>
);
export default Browse;