import React from "react";
import ComponentB from "./ComponentB";
import { createContext, useState } from "react";

export const UserContext = createContext();

function ComponentA(props) {
  const [user, setUser] = useState("Abby");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h1>{`Hi ${user}`}</h1>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
