import React from 'react'
import { Layout } from '../../components/Layout/Layout';
import { ArticleCarousel } from '../../components/ArticleCarousel/ArticleCarousel';
import {useAppSelector} from '../../hooks/redux'
import {useFetchAllArticlesGroupByHook} from "../../hooks/useFetchAllArticlesGroupByHook";

export const ArticleListPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticlesGroupByHook(15, 6, timeState)

  console.log(fetchedArticles)
  // const { data } = useFetchAllArticlesQuery({limit: 2, time: timeState}, {pollingInterval: 1000}) // remove for deploy

  return (
    <div className='article_list'>
      <Layout layoutProps={{time: timeState, instrument: instrumentState}}>
        <div className='article_list__content'>
          {isLoadingArticles ? <span>Loading...</span> : <ArticleCarousel articleCards={fetchedArticles}/>}
        </div>
      </Layout>
    </div>
  );
};
