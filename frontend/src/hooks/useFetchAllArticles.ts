import { useFetchAllArticlesQuery } from '../store/services/ArticleService'
import {IArticle} from "../types/models/IArticle";
import {historyOfEarth, Time} from "../types/timeline";
import {ScientificPublicationsProps, scientificPublicationsCardProps} from "../types/scientificPublications";

export const useFetchAllArticles = (groupOf = 6, time: Time, limit = 0) => {
    const timeIsEarth = (time_: Time) => {
        return historyOfEarth.findIndex(earthType => earthType == time_) != -1;
    }

    const { isLoading, data, error } =
        useFetchAllArticlesQuery({
            limit,
            time,
        }
        , {pollingInterval: 60000}
        )

    const fillEarthArticleList = (fetchedData, groupOf_: number) => {
        const earthArticles: (IArticle | ScientificPublicationsProps)[][] = []

        // rest articles
        if ('results' in fetchedData) {
            // loop for scientificPublications + *groupOf* articles
            earthArticles.push([scientificPublicationsCardProps])
            for (let i = 0; i < groupOf_ - 1; i++) {
                if (fetchedData?.results[i]) {
                    earthArticles[0].push(fetchedData?.results[i])
                }
            }

            fetchedData?.results?.forEach((article: IArticle, index) => {
                if (article != undefined) {
                    if (index >= groupOf_ - 1) {
                        if (((index + 1) % groupOf_) == 0) {
                            earthArticles.push([article])
                        } else {
                            earthArticles[Math.floor((index + 1) / groupOf_)].push(article)
                        }
                    }
                }
            })
        } else {
            // loop for scientificPublications + *groupOf* articles
            earthArticles.push([scientificPublicationsCardProps])
            for (let i = 0; i < groupOf_ - 1; i++) {
                if (fetchedData[i]) {
                    earthArticles[0].push(fetchedData[i])
                }
            }

            fetchedData?.forEach((article: IArticle, index) => {
                if (article != undefined) {
                    if (index >= groupOf_ - 1) {
                        if (((index + 1) % groupOf_) == 0) {
                            earthArticles.push([article])
                        } else {
                            earthArticles[Math.floor((index + 1) / groupOf_)].push(article)
                        }
                    }
                }
            })
        }
        return earthArticles
    }

    const fillArticleList = (fetchedData, groupOf_: number) => {
        const articles: (IArticle | ScientificPublicationsProps)[][] = []

        if ('results' in fetchedData) {
            fetchedData?.results?.forEach((article: IArticle, index) => {
                if (article != undefined) {
                    if ((index % groupOf_) == 0) {
                        articles.push([article])
                    } else {
                        articles[Math.floor(index / groupOf_)].push(article)
                    }
                }
            })
        } else {
            fetchedData?.forEach((article: IArticle, index) => {
                if (article != undefined) {
                    if ((index % groupOf_) == 0) {
                        articles.push([article])
                    } else {
                        articles[Math.floor(index / groupOf_)].push(article)
                    }
                }
            })
        }

        return articles
    }

    const isLoadingArticles = isLoading
    let fetchedArticles: (IArticle | ScientificPublicationsProps)[][] = []


    if (error || isLoading) {
        if (error) {
            console.log(error)
        }
    }
    else {
        fetchedArticles = timeIsEarth(time) ? fillEarthArticleList(data, groupOf) : fillArticleList(data, groupOf)
    }
    return { isLoadingArticles, fetchedArticles }
}
