import React from "react";

import MyLink from "./MyLink";

const Header: React.FC = () => {
  return (
    <header>
      <li>
        <MyLink to="/">Basic Transition</MyLink>
      </li>
    </header>
  );
};

export default Header;
