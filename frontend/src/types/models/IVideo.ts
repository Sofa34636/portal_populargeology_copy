import {Time} from "../timeline";

export interface IVideo {
    id: number;
    time_ago: string;
    video: string;
    time: Time | null;
}
