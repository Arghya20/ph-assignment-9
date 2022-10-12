import React from "react";
import { useLoaderData } from "react-router-dom";

const Options = ({ op, id }) => {
  const getData = useLoaderData();
  return <div>
    <p>{getData.data.legnth}</p>
  </div>;
};

export default Options;
