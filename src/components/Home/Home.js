import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DisplayData from "../DisplayData/DisplayData";
import {
  BookOpenIcon,
  PencilSquareIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Home = () => {
  const showData = useLoaderData();
  const getData = showData.data;
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-sky-100 rounded-b-3xl">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 rounded-full bg-green-400">
                  Brand new
                </p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Prepare high-quality, interactive content in as little as two
                minutes.
              </h2>

              <div className="mt-10">
                <h2 className="flex text-2xl items-center text-blue-500 font-bold">
                  <BookOpenIcon className="h-7 w-7 ml-3 items-center mr-2" />
                  Inclusive, accessible design
                </h2>

                <p className="text-gray-500 text-base ml-9 w-2/3 m-2 p-1">
                  Enable Read Aloud for elementary and ELL students
                </p>
              </div>
              <div className="mt-5">
                <h2 className="flex text-2xl items-center text-green-600 font-bold">
                  <PencilSquareIcon className="h-7 w-7 ml-3 items-center mr-2" />
                  Real-time insights
                </h2>

                <p className="text-gray-500 text-base ml-9 w-2/3 m-2 p-1">
                  Identify student’s needs and immediately adapt
                </p>
              </div>
            </div>
            <div className="ml-10">
              <Link to="/statistics">
                <button className="bg-red-400 px-6 py-2 rounded-full text-white font-bold flex items-center hover:bg-red-500">
                  <div> Visite Now </div>
                  <div>
                    <ArrowRightCircleIcon className="h-7 w-7 text-white ml-3 items-center" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:w-1/2 ">
            <div className="w-5/6 ">
              <img
                className="object-cover rounded-3xl"
                src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg?w=826&t=st=1665567804~exp=1665568404~hmac=7ececcf3a89236803336b44e011ea13e32c75e99a221845dae243b34d4d41605"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Quiz Section ======== */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {getData.map((data) => (
          <DisplayData data={data}></DisplayData>
        ))}
      </div>
    </div>
  );
};

export default Home;
