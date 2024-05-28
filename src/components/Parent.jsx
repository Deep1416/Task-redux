import React from "react";
import { useSelector } from "react-redux";
import Child from "./Child";

const Parent = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <Child />
      {data + "this is a parent comp...."}
    </div>
  );
};

export default Parent;
