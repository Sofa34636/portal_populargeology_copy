import {useGetReconstructionByIdQuery} from "../store/services/ReconstructionService";
import {IReconstruction} from "../types/models/IReconstruction";


export const useGetReconstructionById = (id: number, locationId: number) => {

    const {isLoading, data } =
        useGetReconstructionByIdQuery({
                id,
                locationId
            }
            // , {pollingInterval: 1000}
        )
    const isLoadingReconstruction: boolean = isLoading
    const dataReconstruction: IReconstruction = data

    return { isLoadingReconstruction, dataReconstruction }
}
