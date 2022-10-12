import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 lg:flex-row">
      <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-5">
        <h1 className="mb-4 text-xl font-bold text-violet-800">Q.1 What is the purpose of react router ?</h1>
        <p> <strong>Ans: </strong>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works. The application will contain
          three components: home component, about a component, and contact
          component. We will use React Router to navigate between these
          components.
        </p>
      </div>
      <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-5">
        <h1 className="mb-4 text-xl font-bold text-violet-800">Q.2 How Context API works ?</h1>
        <p> <strong>Ans: </strong>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </p>
      </div>
      <div className="bg-gray-300 p-6 rounded-lg shadow-md mb-5">
        <h1 className="mb-4 text-xl font-bold text-violet-800">Q.3 </h1>
        <p> <strong>Ans: </strong>
         
        </p>
      </div>
    </div>
  );
};

export default Blog;
