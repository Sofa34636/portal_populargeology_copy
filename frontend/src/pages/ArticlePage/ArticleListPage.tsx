import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { ArticleCarousel } from '../../components/ArticleCarousel/ArticleCarousel';
import {useAppSelector} from '../../hooks/redux'
import {timeLineSlice} from "../../store/reducers/timeLineSlice";
import {useFetchAllArticlesGroupByHook} from "../../hooks/useFetchAllArticlesGroupByHook";


export const ArticleListPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const { changeTime, changeInstrument } = timeLineSlice.actions;

  const { isLoading, fetchedArticles, error } = useFetchAllArticlesGroupByHook(10, 6, timeState)


  return (
    <div className='article_list'>
      <Layout layoutProps={{time: timeState, instrument: instrumentState}}>
        <div className='article_list__content'>
          {isLoading ? <span>Loading...</span> : <ArticleCarousel articleCards={fetchedArticles}/>}
        </div>
      </Layout>
    </div>
  );
};
