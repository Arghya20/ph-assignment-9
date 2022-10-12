import React from "react";
import Options from "../Options/Options";

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
    </div>
  );
};

export default Quiz;
