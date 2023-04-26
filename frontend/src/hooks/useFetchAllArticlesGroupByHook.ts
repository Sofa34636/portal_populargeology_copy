import { useFetchAllArticlesQuery } from '../store/services/ArticleService'
import {IArticle} from "../types/models/IArticle";
import {historyOfEarth, Time} from "../types/timeline";
import {ScientificPublicationsProps, scientificPublicationsCardProps} from "../types/scientificPublications";

export const useFetchAllArticlesGroupByHook = (n: number = 6, groupOf: number = 6, time: Time) => {
    const timeIsEarth = (time_: Time) => {
        return historyOfEarth.findIndex(earthType => earthType == time_) != -1;
    }

    const { isLoading, data, error } = useFetchAllArticlesQuery(n, {pollingInterval: 1000}) // remove for deploy)

    const fetchedArticles: (IArticle | ScientificPublicationsProps)[][] = []

    if (error || isLoading) {
        isLoading ? console.log('Loading...') : console.log(error)
    } else {
        if (data['results'] != undefined) {
            if (timeIsEarth(time)) {
                // loop for scientificPublications + 5 articles
                fetchedArticles.push([scientificPublicationsCardProps])
                for (let i = 0; i < groupOf - 1; i++) {
                    fetchedArticles[0].push(data['results'][i])
                }
                // rest articles
                data['results'].forEach((article: IArticle, index) => {
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
            } else {
                data['results'].forEach((article: IArticle, index) => {
                    if (article != undefined) {
                        if ((index % groupOf) == 0) {
                            fetchedArticles.push([article])
                        } else {
                            fetchedArticles[Math.floor(index / groupOf)].push(article)
                        }
                    }
                })
            }
        } else {
            console.log(`Fetched data is ${data}`)
        }
    }
    return { isLoading, fetchedArticles, error }
}
