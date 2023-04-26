import React from 'react';

import { Layout } from '../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {timeLineSlice} from "../../store/reducers/timeLineSlice";
import {useGetArticleByIdQuery} from "../../store/services/ArticleService";


export const GalleryPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()


    const { isLoading, data, error } = useGetArticleByIdQuery(1)


    return (
      <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterButtonsLeft: false}}>
          <span>Gallery</span>
      </Layout>
    )
}
