import {useGetArticleByIdQuery} from "../store/services/ArticleService";
import {IArticle} from "../types/models/IArticle";
import {Time} from "../types/timeline";


export const useGetArticleById = (id: number, time: Time) => {

    const {isLoading, data } =
        useGetArticleByIdQuery({
            id,
            time
        }, {pollingInterval: 1000})
    const isLoadingArticle: boolean = isLoading
    const dataArticle: IArticle = data

    return { isLoadingArticle, dataArticle }
}
