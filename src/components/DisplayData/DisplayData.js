import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const DisplayData = ({ data }) => {
  const { name, logo, total } = data;
  return (
    <div className="bg-red-300 m-3 p-4 rounded-lg">
      <div className="w-[100%] bg-gray-200 rounded-lg">
        <img className="w-full p-6" src={logo} alt="" />
      </div>
      {/*==== Description====  */}
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default DisplayData;
