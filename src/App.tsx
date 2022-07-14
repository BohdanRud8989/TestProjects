import "./App.css";
import React, { useCallback, useState } from "react";
import { Card } from "./components";

function App() {
  const [users, setUsers] = useState<Record<string, string>[]>([]);

  const setUserCallback = useCallback(
    (user: Record<string, string>) => setUsers((users) => [...users, user]),
    [setUsers]
  );

  return (
    <div className="App">
      <main className="App-header">
        <Card onAddUser={setUserCallback} />
        <h4>Users: </h4>
        {users.map(({ name }: Record<string, string>) => {
          return <span key={name}>Name: {name}</span>;
        })}
      </main>
    </div>
  );
}

export default App;
