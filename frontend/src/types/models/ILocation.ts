import {Time} from "../timeline";

export interface ILocation {
    id: number;
    title: string;
    image: string;
    time: Time | null;
}
