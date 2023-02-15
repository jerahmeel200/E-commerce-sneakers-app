import React from "react";

const Title = ({ title }) => {
  console.log(title);
  return (
    <div className="grid items-center">
      <h1
        className="text-3xl lg:text-3xl md:text-2xl font-bold text-slate-900 filter
     drop-shadow-lg mt-5"
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
