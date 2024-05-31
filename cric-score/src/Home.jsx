import React, { useEffect, useState } from "react";
import OverRun from "./comonents/OverRun";
import RunSquare from "./comonents/RunSquare";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const team = useSelector((state) => state.currentRun.team);
  const isGame = useSelector((state) => state.currentRun.isGame);
  const wicket = useSelector((state) => state.currentRun.wicket);

  const currentRun = useSelector((state) => state.currentRun);
  const overWise = useSelector((state) => state.currentRun.overall);
  const runSum = useSelector((state) => state.currentRun.runSum);
  let sum = 0;
  for (let i = 0; i < overWise.length; i++) {
    for (let j = 0; j < overWise[i].length; j++) {
      sum = sum + overWise[i][j];
    }
  }
  if (!isGame) {
    return (
      <>
        <div className="">Game Over</div>
      </>
    );
  }
  return (
    <div className="bg-gray-100 flex-col p-36  rounded-lg shadow-lg">
      <div className="flex gap-2 justify-center items-center ">
        {currentRun.current.map((i) => {
          return <OverRun current={i} />;
        })}
      </div>

      <RunSquare />

      <div className="mt-10">
        <div className="text-center ">
          Team {team} Total Score : {runSum} Wicket : {wicket}
          <div className="">
            <div className="">
              {overWise.map((i, k) => {
                return (
                  <div className="flex">
                    Over {k + 1} : &nbsp;
                    {i.map((i) => (
                      <div className=""> {i}, &nbsp;</div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
