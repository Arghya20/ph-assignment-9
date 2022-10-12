import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const DisplayData = ({ data }) => {
  const { name, logo, total, id } = data;
  return (
    <div className="border m-3 p-4 rounded-lg shadow-md">
      <div className="w-[100%] bg-gray-200 rounded-lg">
        <img className="w-full p-6" src={logo} alt="" />
      </div>
      {/*==== Description====  */}
      <div className="p-2 text-center flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-400">Total Quiz - {total}</p>
        <Link to={`../data/${id}`}>
          <button className="bg-red-400 px-6 py-2 rounded-full shadow-md mt-4 text-white font-bold flex items-center hover:bg-red-500">
            <div> Start Practice</div>
            <div className="block md:hidden lg:block">
              <ArrowRightCircleIcon className="h-7 w-7 text-white ml-3 items-center" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayData;
