import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

import Image from "./Image";

const ALL_USERS = [
  "Alice",
  "Bob",
  "John",
  "Liza",
  "Mike",
  "Mary",
  "Tom",
  "Sarah",
  "Mark",
  "Nancy"
];

const BasicTransition2: React.FC = () => {
  const [users, setUsers] = useState(ALL_USERS.slice(0, 4));

  const transitions = useTransition(users, item => item, {
    from: { transform: "translate(500px, 0px)", opacity: 0, innerHeight: 0 },
    enter: { transform: "translate(0px, 0px)", opacity: 1, innerHeight: 220 },
    leave: { transform: "translate(-500px, 0px)", opacity: 0, innerHeight: 0 }
  });

  return (
    <div>
      <p>
        <button
          type="button"
          disabled={users.length === ALL_USERS.length}
          onClick={() =>
            setUsers(users => [
              ALL_USERS.find(user => !users.includes(user)) ||
                new Date().toISOString(),
              ...users
            ])
          }
        >
          Add user
        </button>
        - Click on image to remove them
      </p>
      <ul style={{ textAlign: "center", paddingLeft: 0 }}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.li
            style={{ listStyle: "none", cursor: "pointer", ...rest }}
            key={key}
            onClick={() => {
              console.log("click", {
                key,
                item,
                props: { innerHeight, ...rest }
              });
              setUsers(users => users.filter(user => user !== item));
            }}
          >
            <animated.div style={{ height: innerHeight }}>
              <Image />
            </animated.div>
            <p style={{ textAlign: "center" }}>{item}</p>
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

export default BasicTransition2;
