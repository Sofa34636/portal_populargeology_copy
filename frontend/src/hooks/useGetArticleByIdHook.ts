import {useGetArticleByIdQuery} from "../store/services/ArticleService";
import { useNavigate } from "react-router-dom";
import {IArticle} from "../types/models/IArticle";


export const useGetArticleByIdHook = (id: number) => {

    const navigate = useNavigate()

    let isLoadingArticle: boolean | null = null
    let dataArticle: IArticle | null = null

    const {isLoading, data, error} = useGetArticleByIdQuery(id)
    isLoadingArticle = isLoading
    dataArticle = data


    return { isLoadingArticle, dataArticle }
}
