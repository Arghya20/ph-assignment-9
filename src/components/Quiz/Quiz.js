import React from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Quiz = ({ data }) => {
  const { question, options, correctAnswer, id } = data;
  const currect = (data) => {
    if (data) {
      toast.success(correctAnswer, { autoClose: 700 });
    }
  };
  const addHandelar = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-gray-100 m-5 p-4 rounded-lg border shadow-md">
      <h1 className="text-xl font-bold ml-8">{question}</h1>
      <div className="p-3 grid grid-cols-1 md:grid-cols-2">
        <label htmlFor={options[0]} className="bg-white m-4 p-4 rounded-lg">
          <input
            onClick={addHandelar}
            type="radio"
            name={id}
            id={options[0]}
            value={options[0]}
          />{" "}
          {options[0]}
        </label>

        <label htmlFor={options[1]} className="bg-white m-4 p-4 rounded-lg">
          <input onClick={addHandelar} type="radio" name={id} id={options[1]} value={options[1]} />{" "}
          {options[1]}
        </label>

        <label htmlFor={options[2]} className="bg-white m-4 p-4 rounded-lg">
          <input onClick={addHandelar} type="radio" name={id} id={options[2]} value={options[2]} />{" "}
          {options[2]}
        </label>
        <label htmlFor={options[3]} className="bg-white m-4 p-4 rounded-lg">
          <input onClick={addHandelar} type="radio" name={id} id={options[3]} value={options[3]} />{" "}
          {options[3]}
        </label>
      </div>

      <div className="flex justify-center pb-3">
        <button
          onClick={() => currect(correctAnswer)}
          className="bg-green-400 px-6 py-2 rounded-full text-white font-bold flex items-center hover:bg-green-500"
        >
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
