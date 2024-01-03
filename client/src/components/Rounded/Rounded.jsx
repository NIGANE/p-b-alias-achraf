import React from "react";

const Rounded = ({ children }) => {
  return (
    <div className=" text-slate-50 max-w-fit  m-auto ">
      <div className="bg-white bg-opacity-[50%] backdrop-blur-[20px] rounded-2xl  px-6 py-3 ">
        {children}
      </div>
    </div>
  );
};

export default Rounded;
