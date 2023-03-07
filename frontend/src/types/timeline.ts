enum mainTimeline {
  'Большой взрыв',
  'Солнечная система',
  'Образование луны',
  'История земли',
}

export const historyOfEarth = [
  'черная земля',
  'голубая земля',
  'серая земля',
  'живая земля',
  'красная земля',
  'скучный миллиард',
  'белая земля',
  'зеленая земля',
  'эпоха человека',
  'настоящее',
  'будущее',
];

export const timeTypes = [
  'большой взрыв',
  'солнечная система',
  'образование луны',
  'черная земля',
  'голубая земля',
  'серая земля',
  'живая земля',
  'красная земля',
  'скучный миллиард',
  'белая земля',
  'зеленая земля',
  'эпоха человека',
  'настоящее',
  'будущее',
] as const;

export const instrumentTypes = ['video', 'article', 'gallery', 'relief', '3dearth'] as const;

export type Time = typeof timeTypes[number];
export type Instrument = typeof instrumentTypes[number];

export interface TimeLineState {
  time: Time | null;
  instrument: Instrument | null;
}

export enum TimeLineActionTypes {
  CHANGE_TIME = 'CHANGE_TIME',
  CHANGE_INSTRUMENT = 'CHANGE_INSTRUMENT',
}
interface ChangeTimeAction {
  type: TimeLineActionTypes.CHANGE_TIME;
  payload: Time;
}
interface ChangeInstrumentAction {
  type: TimeLineActionTypes.CHANGE_INSTRUMENT;
  payload: Instrument;
}

export type ChangeAction = ChangeTimeAction | ChangeInstrumentAction;
