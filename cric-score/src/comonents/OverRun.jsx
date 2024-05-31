import React from "react";

const OverRun = ({ current }) => {
  return (
    <div className="bg-transparent w-fit px-3 py-1 font-semibold rounded-full shadow-lg text-black border-2 border-black">
      {current}
    </div>
  );
};

export default OverRun;
