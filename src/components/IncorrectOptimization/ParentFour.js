import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Abu");

  const person = {
    fname: "Abu",
    lname: "Zar",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>
      <button onClick={() => setName("React Developer")}>Change Name</button>
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
    </div>
  );
};