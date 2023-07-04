import { Time } from '../timeline'

export interface IEarth {
  id: number;
  title: string;
  time: Time;
  time_ago: string;
  text: string;
  text_more: string;
  image_more: string;
  ambientMap: string;
  baseMap: string;
  cloudMap: string;
  heightMap: string;
  metallicMap: string;
  normalMap: string;
  roughnessMap: string;
}
