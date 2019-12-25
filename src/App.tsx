import React, { useState, useEffect, useRef, createRef } from "react";

import "./App.css";
import Image from "./Image";

const users = ["Alice", "Bob", "John", "Liza"];
const items = ["", ...users];

const App: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [infos, setInfos] = useState<any>({});

  // dynamically create refs
  const refs = useRef(
    items.reduce<{
      [key: string]: React.RefObject<HTMLImageElement>;
    }>((acc, user) => {
      acc[user || ""] = createRef<HTMLImageElement>();
      return acc;
    }, {})
  );

  // process images size based on refs + scrollY/scrollX
  function mount() {
    console.log("refs", refs);
    const images = items.map(user => ({
      name: user,
      ...refs?.current?.[user]?.current?.getBoundingClientRect().toJSON()
    }));
    console.log("refs", refs, "infos", images);
    setInfos({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      list: images
    });
  }

  useEffect(mount, [user]);

  // make sure to run mount on load, once every images are loaded
  // to ensure correct computation
  useEffect(() => {
    window.addEventListener("load", mount);
  }, []);

  return (
    <div>
      <pre style={{ position: "fixed", fontSize: "0.76em" }}>
        {JSON.stringify(
          {
            user,
            ...infos
          },
          null,
          "  "
        )}
      </pre>
      <p>
        <Image
          variant="large"
          onClick={() => setUser("")}
          ref={refs.current[""]}
        />
      </p>
      <ul style={{ textAlign: "center" }}>
        {users.map(user => (
          <li style={{ listStyle: "none" }} key={user}>
            <Image
              key={user}
              onClick={() => setUser(user)}
              ref={refs.current[user]}
            />
            <p style={{ textAlign: "center" }}>{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
