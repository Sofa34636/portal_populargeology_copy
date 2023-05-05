import { useFetchAllArticlesQuery } from '../store/services/ArticleService'
import {IArticle} from "../types/models/IArticle";
import {historyOfEarth, Time} from "../types/timeline";
import {ScientificPublicationsProps, scientificPublicationsCardProps} from "../types/scientificPublications";

export const useFetchAllArticlesHook = (groupOf: number = 6, time: Time, limit: number = 0) => {
    const timeIsEarth = (time_: Time) => {
        return historyOfEarth.findIndex(earthType => earthType == time_) != -1;
    }

    const { isLoading, data, error } =
        useFetchAllArticlesQuery({
            limit: limit,
            time: time
        })

    const isLoadingArticles = isLoading
    const fetchedArticles: (IArticle | ScientificPublicationsProps)[][] = []


    if (error || isLoading) {
        isLoading ? console.log('Loading...') : console.log(error)
    }
    else {
        if (timeIsEarth(time)) {
            // loop for scientificPublications + 5 articles
            fetchedArticles.push([scientificPublicationsCardProps])
            for (let i = 0; i < groupOf - 1; i++) {
                if (data[i]) {
                    fetchedArticles[0].push(data[i])
                }
            }
            // rest articles
            if ('results' in data) {
                data?.results?.forEach((article: IArticle, index) => {
                    if (article != undefined) {
                        if (index >= groupOf - 1) {
                            if (((index + 1) % groupOf) == 0) {
                                fetchedArticles.push([article])
                            } else {
                                fetchedArticles[Math.floor((index + 1) / groupOf)].push(article)
                            }
                        }
                    }
                })
            }
            else {
                data?.forEach((article: IArticle, index) => {
                    if (article != undefined) {
                        if (index >= groupOf - 1) {
                            if (((index + 1) % groupOf) == 0) {
                                fetchedArticles.push([article])
                            } else {
                                fetchedArticles[Math.floor((index + 1) / groupOf)].push(article)
                            }
                        }
                    }
                })
            }


        } else {
            if ('results' in data) {
                data?.results?.forEach((article: IArticle, index) => {
                    if (article != undefined) {
                        if ((index % groupOf) == 0) {
                            fetchedArticles.push([article])
                        } else {
                            fetchedArticles[Math.floor(index / groupOf)].push(article)
                        }
                    }
                })
            }
            else {
                data?.forEach((article: IArticle, index) => {
                    if (article != undefined) {
                        if ((index % groupOf) == 0) {
                            fetchedArticles.push([article])
                        } else {
                            fetchedArticles[Math.floor(index / groupOf)].push(article)
                        }
                    }
                })
            }
        }
    }
    return { isLoadingArticles, fetchedArticles }
}
