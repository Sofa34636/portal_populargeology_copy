import { useFetchAllArticlesQuery, useGetArticleByIdQuery } from '../store/services/ArticleService'
import {IArticle} from "../types/models/IArticle";

export const useFetchAllArticlesHook = (n: number = 6) => {
    const { isLoading, data, error } = useFetchAllArticlesQuery(n)

    const fetchedArticles: IArticle[][] = []

    if (data != undefined) {
        for (let i = 0; i < Math.ceil(data['results'].length / 6); i++) {
            fetchedArticles.push([])
        }
        data['results'].forEach((article, index) => {
            if (article != undefined) {
                fetchedArticles[Math.floor(index / 6)].push(article)
            }
        })
    }

    // console.log(fetchedArticles)
    return { isLoading, fetchedArticles, error }
}