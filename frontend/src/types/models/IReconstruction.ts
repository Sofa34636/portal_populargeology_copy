import {Time} from "../timeline";

export interface IReconstruction {
    id: number;
    title: string;
    time_ago: string;
    position: string;
    coordinates: string;
    image: string;
    text: string;
    location: number | null;
}
