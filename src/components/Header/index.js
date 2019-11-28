import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/37150645?v=4"
        alt="foto-usuario"
      />
      Lucas Silva
    </User>
  </Container>
);

export default Header;
