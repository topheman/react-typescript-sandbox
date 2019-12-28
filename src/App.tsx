import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./App.css";
import Image from "./Image";

const originalUsers = ["Alice", "Bob", "John", "Liza"];

const App: React.FC = () => {
  const [users, setUsers] = useState(originalUsers);

  const transitions = useTransition(users, item => item, {
    from: { transform: "translate(500px, 0px)", opacity: 0 },
    enter: { transform: "translate(0px, 0px)", opacity: 1 },
    leave: { transform: "translate(-500px, 0px)", opacity: 0 }
  });

  return (
    <div>
      <p>
        <button
          type="button"
          onClick={() =>
            setUsers(users => [`foo${new Date().toISOString()}`, ...users])
          }
        >
          Add user
        </button>
        - Click on image to remove them
      </p>
      <ul style={{ textAlign: "center", paddingLeft: 0 }}>
        {transitions.map(({ item, props, key }) => (
          <animated.li
            style={{ listStyle: "none", cursor: "pointer", ...props }}
            key={key}
            onClick={() => {
              console.log("click", { key, item });
              setUsers(users => users.filter(user => user !== item));
            }}
          >
            <Image />
            <p style={{ textAlign: "center" }}>{item}</p>
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

export default App;
