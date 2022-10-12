import React from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";


const Quiz = ({ data }) => {
  const { question, options, correctAnswer } = data;
  return (
    <div className="bg-gray-200 m-5 p-4 rounded-lg">
      <h1 className="text-xl font-bold ml-8">{question}</h1>
     <div className="p-3 grid grid-cols-1 md:grid-cols-2">
     {options.map((op) => (
        <Options op={op}></Options>
      ))}
     </div>
     
     <div className="flex justify-center pb-3">
         <button className="bg-green-400 px-6 py-2 rounded-full text-white font-bold flex items-center hover:bg-green-500">
           <div> Show Answer</div>
            <div>
              <EyeIcon className="h-7 w-7 text-white ml-3 items-center" />
            </div>
          </button>
     </div>

    </div>
  );
};

export default Quiz;
