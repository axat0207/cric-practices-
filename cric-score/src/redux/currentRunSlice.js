import { createSlice, current } from "@reduxjs/toolkit";

const currentRunSlice = createSlice({
  name: "currentRun",
  initialState: {
    current: [],
    overall: [],
    runSum: 0,
    wicket: 0,
    isGame: true,
    team: 1,
    extras: 0,  // New field to track extra deliveries
  },
  reducers: {
    addScore: (state, action) => {
      if (!state.isGame) return;

      if (action.payload === "Wicket") {
        state.wicket += 1;
        if (state.wicket === 10) {
          state.isGame = false;
        }
        if (state.current.length < 6) {
          state.current.push(action.payload);
        } else {
          state.overall.push([...state.current]);
          state.current = [action.payload];
        }
      } else if (action.payload === "Wide" || action.payload === "No Ball") {
        state.runSum += 1;
        state.extras += 1;
        // Extras are counted, but do not increment the number of legitimate balls in the over.
      } else {
        state.runSum += action.payload;
        if (state.current.length < 6) {
          state.current.push(action.payload);
        } else {
          state.overall.push([...state.current]);
          state.current = [action.payload];
        }
      }
    },
    overallScore: (state) => {
      state.runSum = state.overall.flat().reduce((sum, score) => {
        if (typeof score === "number") {
          return sum + score;
        }
        return sum;
      }, state.runSum);
    },
  },
});

export const { addScore, overallScore } = currentRunSlice.actions;
export default currentRunSlice.reducer;
