export const mainTimeline  = [
  'Большой взрыв',
  'Солнечная система',
  'Образование луны',
  'История земли',
]

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

export const timeTypes = {
  big_bang: 'большой взрыв',
  solar_system: 'солнечная система',
  moon_formation: 'образование луны',
  black_earth: 'черная земля',
  blue_earth: 'голубая земля',
  grey_earth: 'серая земля',
  living_earth: 'живая земля',
  red_earth: 'красная земля',
  boring_billion: 'скучный миллиард',
  white_earth: 'белая земля',
  green_earth: 'зеленая земля',
  age_of_man: 'эпоха человека',
  present: 'настоящее',
  future: 'будущее'
} as const;

export const instrumentTypes = {
  video: 'видео',
  article: 'статьи',
  gallery: 'галлерея',
  relief: 'рельеф',
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

