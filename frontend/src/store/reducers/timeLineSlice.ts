
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Instrument, instrumentTypes, Time, TimeLineState, timeTypes} from '../../types/timeline'


const initialState = {
  time: timeTypes.bigBang,
  instrument: instrumentTypes.video,
} as TimeLineState;

export const timeLineSlice = createSlice({
  name: 'timeLine',
  initialState: initialState,
  reducers: {
    changeTime(state, action: PayloadAction<Time>) {
      state.time = action.payload
    },
    changeInstrument(state, action: PayloadAction<Instrument>) {
      state.instrument = action.payload
    },
  }
});

export const { changeTime, changeInstrument } = timeLineSlice.actions
export default timeLineSlice.reducer;
