import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD(props) {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h1>{`Bye ${user}`}</h1>
    </div>
  );
}

export default ComponentD;
