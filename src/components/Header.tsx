import React from "react";

import MyLink from "./MyLink";

const Header: React.FC = () => {
  return (
    <header>
      <li>
        <MyLink to="/basic-transition">Basic Transition</MyLink>
      </li>
      <li>
        <MyLink to="/basic-transition2">Basic Transition 2</MyLink>
      </li>
    </header>
  );
};

export default Header;
