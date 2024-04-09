/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    historyList: [],
}

const numberGameSlice = createSlice({
  name: 'numberGame',
  initialState: initialState,
  reducers: {
    updateHistoryList: (state, action) => {
      state.historyList.push(action.payload);
    },
  },
});

const { 
    reducer,
    actions: { updateHistoryList }
 } = numberGameSlice;
const selectorNumberGame = (state) => state.numberGame;

export { updateHistoryList, selectorNumberGame };
export default reducer;