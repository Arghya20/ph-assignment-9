import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quizData = useLoaderData();
  const alldata = quizData.data.questions;
  return (
    <div className="mx-auto py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 lg:flex-row">
     <div className="flex justify-center">
     <p className="text-center text-xl font-bold bg-blue-500 inline-block px-4 py-2 rounded-full text-white">Quiz of {quizData.data.name}</p>
     </div>
      {
        alldata.map(data => <Quiz key={data.questions} data={data}></Quiz> )
      }
    </div>
  );
};

export default Quizzes;
