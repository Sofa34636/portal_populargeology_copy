import { Time } from '../timeline'

export interface IEarth {
  id: number;
  title: string;
  time: Time;
  time_ago: string;
  text: string;
  ambientMap: string;
  baseMap: string;
  cloudMap: string;
  heightMap: string;
  metallicMap: string;
  normalMap: string;
  roughnessMap: string;
}
