import {useFetchAllLocationsQuery} from "../store/services/LocationService";
import {Time} from "../types/timeline";
import {ILocation} from "../types/models/ILocation";


export const useFetchAllLocations = (groupOf = 6, time: Time, limit = 0) => {

    const {isLoading, data } =
        useFetchAllLocationsQuery({
                limit,
                time
            }
            // , {pollingInterval: 1000}
        )

    const isLoadingLocations: boolean = isLoading

    const fillLocationsList = (fetchedData, groupOf_: number) => {
        const locations: ILocation[][] = []

        if (fetchedData != undefined) {
            if ('results' in fetchedData) {
                fetchedData?.results?.forEach((location: ILocation, index) => {
                    if (location != undefined) {
                        if ((index % groupOf_) == 0) {
                            locations.push([location])
                        } else {
                            locations[Math.floor(index / groupOf_)].push(location)
                        }
                    }
                })
            } else {
                fetchedData?.forEach((location: ILocation, index) => {
                    if (location != undefined) {
                        if ((index % groupOf_) == 0) {
                            locations.push([location])
                        } else {
                            locations[Math.floor(index / groupOf_)].push(location)
                        }
                    }
                })
            }
        }

        return locations
    }

    const fetchedLocations: ILocation[][] = fillLocationsList(data, groupOf)

    return { isLoadingLocations, fetchedLocations }
}
