export const mainTimeline  = [
  'Большой Взрыв',
  'Солнечная Система',
  'Образование Луны',
  'История Земли',
]

export const  historyOfEarth  = [
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

export const timeTypes = {
  bigBang: 'большой взрыв',
  solarSystem: 'солнечная система',
  moonFormation: 'образование луны',
  earthHistory: 'история земли',
  blackEarth: 'черная земля',
  blueEarth: 'голубая земля',
  greyEarth: 'серая земля',
  livingEarth: 'живая земля',
  redEarth: 'красная земля',
  boringBillion: 'скучный миллиард',
  whiteEarth: 'белая земля',
  greenEarth: 'зеленая земля',
  ageOfMan: 'эпоха человека',
  present: 'настоящее',
  future: 'будущее'
} as const;

export const instrumentTypes = {
  video: 'видео',
  articles: 'статьи',
  exhibits: 'галерея',
  reconstruction: 'реконструкция',
  earth: '3д земля'
} as const;


type time_keys = keyof typeof timeTypes;
export type Time = (typeof timeTypes)[time_keys]

type instrument_keys = keyof typeof instrumentTypes;
export type Instrument = (typeof instrumentTypes)[instrument_keys]


export interface TimeLineState {
  time: Time | null;
  instrument: Instrument | null;
}

export function getObjectKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

