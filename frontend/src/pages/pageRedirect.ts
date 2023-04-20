import { Instrument, instrumentTypes, Time, timeTypes } from '../types/timeline'

export const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value);

export const pageRedirect = (time: Time, instrument: Instrument) =>
  `${getKeyByValue(timeTypes, time)}/${getKeyByValue(instrumentTypes, instrument)}`

