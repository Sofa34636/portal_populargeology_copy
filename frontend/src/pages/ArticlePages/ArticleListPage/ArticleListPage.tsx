import React, {useEffect, useState} from 'react'
import { Layout } from '../../../components/Layout/Layout';
import { ArticleCarousel } from '../../../components/ToolComponents/Article/ArticleCarousel/ArticleCarousel';
import {useAppSelector} from '../../../hooks/redux'
import {useFetchAllArticlesHook} from "../../../hooks/useFetchAllArticlesHook";
import { useFetchAllArticlesQuery } from '../../../store/services/ArticleService'
import { timeTypes } from '../../../types/timeline'
import {IArticle} from "../../../types/models/IArticle";

export const ArticleListPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticlesHook(6, timeState)

  return (
    <div className='article_list'>
      <Layout layoutProps={{time: timeState, instrument: instrumentState}}>
        <div className='article_list__content'>
          { isLoadingArticles ? <span>Loading...</span> : <ArticleCarousel articleCards={fetchedArticles}/> }
        </div>
      </Layout>
    </div>
  );
};
