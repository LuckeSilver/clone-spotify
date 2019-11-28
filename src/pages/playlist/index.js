import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (

  <Container>
    <Header>
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Foto-Playlist"/>

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Gospel</h1>
        <p>15 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Àlbum</th>
        <th><img src={ClockIcon} alt="Duração"/></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar"/></td>
          <td>In The End</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
      </tbody>
    </SongList>

  </Container>

);

export default Playlist;