import React, {useEffect} from 'react'
import { Layout } from '../../../components/Layout/Layout';
import { CardCarousel } from '../../../components/CardCarousel/CardCarousel';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {useFetchAllArticles} from "../../../hooks/useFetchAllArticles";
import {instrumentTypes, timeTypes} from "../../../types/timeline";
import {useParams} from "react-router-dom";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";


export const ArticleListPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { time: timeParam } = useParams()
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

  const { isLoadingArticles, fetchedArticles } = useFetchAllArticles(6, timeState)

    useEffect(() => {
        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.video))
    }, [])

  return (
      <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
        <div className='article_list__content'>
          {isLoadingArticles ? <span>Загрузка...</span> :
              fetchedArticles?.length == 0 ? <span>Нет статей</span> :
                  <CardCarousel cards={fetchedArticles}/>
          }
        </div>
      </Layout>
  );
};
