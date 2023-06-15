import {useGetLocationByIdQuery} from "../store/services/LocationService";
import {ILocation} from "../types/models/ILocation";


export const useGetLocationById = (id: number) => {

    const {isLoading, data } =
        useGetLocationByIdQuery(id, {pollingInterval: 60000}
        )
    const isLoadingLocation: boolean = isLoading
    const dataLocation: ILocation = data

    return { isLoadingLocation, dataLocation }
}
