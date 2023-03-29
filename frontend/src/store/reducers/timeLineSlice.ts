
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Instrument, instrumentTypes, Time, TimeLineState, timeTypes} from '../../types/timeline'


const initialState: TimeLineState = {
  time: timeTypes.bigBang,
  instrument: instrumentTypes.video
};

export const timeLineSlice = createSlice({
  name: 'timeLine',
  initialState,
  reducers: {
    changeTime(state, action: PayloadAction<Time>) {
      state.time = action.payload
    },
    changeInstrument(state, action: PayloadAction<Instrument>) {
      state.instrument = action.payload
    }
  }
});

export default timeLineSlice.reducer;
