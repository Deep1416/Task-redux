import React from "react";
import { useDispatch } from "react-redux";

const Child = () => {
  const dispatch = useDispatch();
  const handleSet = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };
  return (
    <>
      <button onClick={() => handleSet("This child Componments Data")}>
        Submit
      </button>
    </>
  );
};

export default Child;
