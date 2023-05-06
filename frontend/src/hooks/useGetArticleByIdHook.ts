import {useGetArticleByIdQuery} from "../store/services/ArticleService";
import { useNavigate } from "react-router-dom";
import {IArticle} from "../types/models/IArticle";
import {Time} from "../types/timeline";


export const useGetArticleByIdHook = (id: number, time: Time) => {

    const {isLoading, data, error} =
        useGetArticleByIdQuery({
            id,
            time
        })
    let isLoadingArticle: boolean = isLoading
    const dataArticle: IArticle = data


    return { isLoadingArticle, dataArticle }
}
