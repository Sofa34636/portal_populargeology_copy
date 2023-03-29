import * as React from 'react';

import { Layout } from '../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {timeLineSlice} from "../../store/reducers/timeLineSlice";
import {useGetArticleByIdQuery} from "../../services/ArticleService";
import {useEffect} from "react";
import {instrumentTypes} from "../../types/timeline";


export const GalleryPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()


    const { isLoading, data, error } = useGetArticleByIdQuery(1)

    useEffect(() => {
        dispatch(changeInstrument(instrumentTypes.gallery))
    })

    return (
        <div>
            <Layout
              layoutProps={{time: timeState, instrument: instrumentState}}
            />
        </div>
    )
}
