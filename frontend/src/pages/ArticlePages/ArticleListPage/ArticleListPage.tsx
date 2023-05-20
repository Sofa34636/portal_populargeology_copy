import React from 'react'
import { Layout } from '../../../components/Layout/Layout';
import { CardCarousel } from '../../../components/CardCarousel/CardCarousel';
import {useAppSelector} from '../../../hooks/redux'
import {useFetchAllArticles} from "../../../hooks/useFetchAllArticles";


export const ArticleListPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticles(6, timeState)
  return (
    <div className='article_list'>
      <Layout layoutProps={{time: timeState, instrument: instrumentState}}>
        <div className='article_list__content'>
          {isLoadingArticles ? <span>Загрузка...</span> :
              fetchedArticles.length == 0 ? <span>Нет статей</span> :
                  <CardCarousel cards={fetchedArticles}/>
          }
        </div>
      </Layout>
    </div>
  );
};
