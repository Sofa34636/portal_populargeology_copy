import { Instrument, Time } from './timeline'

export type CHANGE_TIME = "timeLine/changeTime"
export type CHANGE_INSTRUMENT = "timeLine/changeInstrument"

export type Redirect = {
  payload: Time | Instrument
  type: CHANGE_TIME | CHANGE_INSTRUMENT
}
