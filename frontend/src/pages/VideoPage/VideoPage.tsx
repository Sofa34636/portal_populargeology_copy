import React, { useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {timeLineSlice} from "../../store/reducers/timeLineSlice";
import {useGetArticleByIdQuery} from "../../store/services/ArticleService";
import { useGetEarthByIdQuery } from '../../store/services/EarthService'
import VideoPlayer from '../../components/ToolComponents/VideoPlayer/VideoPlayer'


export const VideoPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()


    const { isLoading, data, isFetching } = useGetEarthByIdQuery(1)

    const [isLayoutDisplayed, setIsLayoutDisplayed] = useState(true);

    const displayLayout = () => setIsLayoutDisplayed(true)
    const hideLayout = () => setIsLayoutDisplayed(false)

    if (!data) return <h1>loading...</h1>


    return (
      <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterButtonsLeft: false, isHeaderDisplayed:isLayoutDisplayed, isFooterDisplayed:isLayoutDisplayed}}>
          <VideoPlayer className='video-player'
                       video_url = {'http://localhost:8000/media/videos/Big_Bang_2.mp4'}
                       layoutDisplay={displayLayout}
                       layoutHide={hideLayout}

          />
      </Layout>
    )
}
