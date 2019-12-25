import React, { useState, useEffect, useRef, createRef } from "react";
import "./App.css";
import Image from "./Image";

const people = ["Alice", "Bob", "John", "Liza"];

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [infos, setInfos] = useState<any>({});

  // dynamically create refs
  const refs = useRef(
    [null, ...people].map(() => createRef<HTMLImageElement>())
  );

  // process images size based on refs + scrollY/scrollX
  function mount() {
    console.log("refs", refs);
    const images = [null, ...people].map((user, index) => ({
      name: user,
      ...refs?.current?.[index]?.current?.getBoundingClientRect().toJSON()
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
          onClick={() => setUser(null)}
          ref={refs.current[0]}
        />
      </p>
      <ul style={{ textAlign: "center" }}>
        {people.map((user, index) => (
          <li style={{ listStyle: "none" }} key={user}>
            <Image
              key={user}
              onClick={() => setUser(user)}
              ref={refs.current[1 + index]}
            />
            <p style={{ textAlign: "center" }}>{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
