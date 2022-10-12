import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <img
          src="https://stories.freepiklabs.com/storage/23103/404-error-rafiki-2773.png"
          alt=""
        />
        {
            error && (
                <div>
                    <p>{error.statusText || error.message}</p>
                </div>
            )
        }
        <p className="text-sky-600 text-xl font-bold">
          You've found a page that doesn't exist !
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/">
            {" "}
            <button className="bg-red-400 px-6 py-2 rounded-full text-white font-bold flex items-center hover:bg-red-500">
              <div>
                <ArrowLeftCircleIcon className="h-6 w-6 text-white items-center mr-2" />
              </div>
              <div> Back to Home</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
