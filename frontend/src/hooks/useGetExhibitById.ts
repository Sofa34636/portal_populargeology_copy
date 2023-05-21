import {useGetExhibitByIdQuery} from "../store/services/ExhibitService";
import {IExhibit} from "../types/models/IExhibit";
import {Time} from "../types/timeline";


export const useGetExhibitById = (id: number, time: Time) => {

    const {isLoading, data } =
        useGetExhibitByIdQuery({
            id,
            time
        }, {pollingInterval: 1000})
    const isLoadingExhibit: boolean = isLoading
    const dataExhibit: IExhibit = data

    return { isLoadingExhibit, dataExhibit }
}
