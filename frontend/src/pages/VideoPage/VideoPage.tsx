import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import { useGetVideoByTimeQuery } from '../../store/services/VideoService'
import { VideoPlayer } from '../../components/ToolComponents/VideoPlayer/VideoPlayer'
import './VideoPage.scss'
import { useParams } from 'react-router-dom'
import { getObjectKey, instrumentTypes, timeTypes } from '../../types/timeline'
import { timeLineSlice } from '../../store/reducers/timeLineSlice'

export const VideoPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { time: timeParam } = useParams()
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    const [isLayoutDisplayed, setIsLayoutDisplayed] = useState(true);

    useEffect(() => {
      dispatch(changeTime(timeTypes[timeParam]))
      dispatch(changeInstrument(instrumentTypes.video))
    }, [])

  const { data } = useGetVideoByTimeQuery(getObjectKey(timeTypes, timeState))

    const displayLayout = () => setIsLayoutDisplayed(true)
    const hideLayout = () => setIsLayoutDisplayed(false)

    if (!data) return <h1>loading...</h1>


    return (
      <Layout
        time={timeState}
        instrument={instrumentState}
        footerDisplayStyle={isLayoutDisplayed?'video':'hide'}
        headerDisplayStyle={isLayoutDisplayed?'default':'hide'}
        videoTimeAgo={data.time_ago}>
          <VideoPlayer
                       videoUrl = {data[0].video}
                       layoutDisplay={displayLayout}
                       layoutHide={hideLayout}
          />
      </Layout>
    )
}
