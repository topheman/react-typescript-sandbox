import React from "react";

import Header from "./Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
