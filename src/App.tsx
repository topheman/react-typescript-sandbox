import React, { useState } from "react";
import "./App.css";
import Image from "./Image";

const people = ["Alice", "Bob", "John", "Liza"];

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  return (
    <div>
      <div>
        {JSON.stringify({
          user
        })}
      </div>
      <p>
        <Image variant="large" onClick={() => setUser(null)} />
      </p>
      <ul style={{ textAlign: "center" }}>
        {people.map(user => (
          <li style={{ listStyle: "none" }} key={user}>
            <Image key={user} onClick={() => setUser(user)} />
            <p style={{ textAlign: "center" }}>{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
