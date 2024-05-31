import React from "react";
import { useDispatch } from "react-redux";
import {addScore} from '../redux/currentRunSlice.js'
const RunSquare = () => {
  const dispatch = useDispatch();

  const allScore = [0, 1, 2, 3, 4, 5, 6, "Wide", "No Ball", "Wicket"];
  return (
    <div className="flex flex-row mt-6 flex-wrap gap-2">
      {allScore.map((run) => {
        return (
          <div
            onClick={() =>{  dispatch(addScore(run))}}
            className="bg-blue-300 cursor-pointer hover:bg-blue-400 px-3 py-2 rounded-lg shadow-lg text-white"
          >
            {run}
          </div>
        );
      })}
    </div>
  );
};

export default RunSquare;
