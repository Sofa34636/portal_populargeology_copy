import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {timeLineSlice} from "../../store/reducers/timeLineSlice";
import {useGetArticleByIdQuery} from "../../store/services/ArticleService";
import { useGetEarthByIdQuery } from '../../store/services/EarthService'

export const VideoPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()


    const { isLoading, data, isFetching } = useGetEarthByIdQuery(1)

    if (!data) return <h1>loading...</h1>

    return (
        <div>

            <span>{JSON.stringify(data)}</span>
        </div>
    )
}
