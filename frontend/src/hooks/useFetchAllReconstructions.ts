import {useFetchAllReconstructionsQuery} from "../store/services/ReconstructionService";
import {IReconstruction} from "../types/models/IReconstruction";


export const useFetchAllReconstructions = (groupOf = 6, locationId: number, limit = 0) => {

    const {isLoading, data } =
        useFetchAllReconstructionsQuery({
                limit,
                locationId
            }
            , {pollingInterval: 60000}
        )

    const isLoadingReconstructions: boolean = isLoading

    const fillReconstructionsList = (fetchedData, groupOf_: number) => {
        const reconstructions: IReconstruction[][] = []

        if (fetchedData != undefined) {
            if ('results' in fetchedData) {
                fetchedData?.results?.forEach((reconstruction: IReconstruction, index) => {
                    if (reconstruction != undefined) {
                        if ((index % groupOf_) == 0) {
                            reconstructions.push([reconstruction])
                        } else {
                            reconstructions[Math.floor(index / groupOf_)].push(reconstruction)
                        }
                    }
                })
            } else {
                fetchedData?.forEach((reconstruction: IReconstruction, index) => {
                    if (reconstruction != undefined) {
                        if ((index % groupOf_) == 0) {
                            reconstructions.push([reconstruction])
                        } else {
                            reconstructions[Math.floor(index / groupOf_)].push(reconstruction)
                        }
                    }
                })
            }
        }

        return reconstructions
    }

    const fetchedReconstructions: IReconstruction[][] = fillReconstructionsList(data, groupOf)

    return { isLoadingReconstructions, fetchedReconstructions }
}
