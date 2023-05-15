import {Time} from "../timeline";

export interface IExhibit {
    id: number;
    title: string;
    time_ago: string;
    image: string;
    text: string;
    src_article: string;
    time: Time;
}
