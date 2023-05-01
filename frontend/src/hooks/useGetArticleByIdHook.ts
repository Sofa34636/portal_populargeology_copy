import {useGetArticleByIdQuery} from "../store/services/ArticleService";
import { useNavigate } from "react-router-dom";
import {IArticle} from "../types/models/IArticle";


export const useGetArticleByIdHook = (id: number) => {

    const navigate = useNavigate()


    const {isLoading, data, error} = useGetArticleByIdQuery(id)
    let isLoadingArticle: boolean = isLoading
    const dataArticle: IArticle = data


    return { isLoadingArticle, dataArticle }
}
