import { useFetchAllArticlesQuery, useGetArticleByIdQuery } from '../store/services/ArticleService'
import {IArticle} from "../types/models/IArticle";

export const useFetchAllArticlesGroupByHook = (n: number = 6, groupOf: number = 6) => {
    const { isLoading, data, error } = useFetchAllArticlesQuery(n)

    const fetchedArticles: IArticle[][] = []

    if (error || isLoading) {
        isLoading ? console.log('Loading...') : console.log(error)
    } else {
        if (data != undefined) {
            // console.log(data['results'])
            data['results'].forEach((article: IArticle, index) => {
                if (article != undefined) {
                    if ((index % groupOf) == 0) {
                        fetchedArticles.push([article])
                    } else {
                        fetchedArticles[Math.floor(index / groupOf)].push(article)
                    }

                }
            })
        } else {
            console.log(`Fetched data is ${data}`)
        }
    }
    return { isLoading, fetchedArticles, error }
}