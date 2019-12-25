import React, { useState, createRef } from "react";
import "./App.css";
import Image from "./Image";

const people = ["Alice", "Bob", "John", "Liza"];

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const primaryRef = createRef<HTMLImageElement>();
  const peopleRefs = people.reduce<{
    [key: string]: React.Ref<HTMLImageElement>;
  }>((acc, user) => {
    acc[user] = createRef<HTMLImageElement>();
    return acc;
  }, {});
  return (
    <div>
      <div>
        {JSON.stringify({
          user
        })}
      </div>
      <p>
        <Image variant="large" onClick={() => setUser(null)} ref={primaryRef} />
      </p>
      <ul style={{ textAlign: "center" }}>
        {people.map((user, index) => (
          <li style={{ listStyle: "none" }} key={user}>
            <Image
              key={user}
              onClick={() => setUser(user)}
              ref={peopleRefs[user]}
            />
            <p style={{ textAlign: "center" }}>{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
