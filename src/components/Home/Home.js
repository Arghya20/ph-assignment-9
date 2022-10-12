import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayData from "../DisplayData/DisplayData";

const Home = () => {
  const showData = useLoaderData();
  const getData = showData.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      {getData.map((data) => (
        <DisplayData data={data}></DisplayData>
      ))}
      
    </div>
  );
};

export default Home;
