import React, { useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useAppSelector } from '../../hooks/redux'

import { useGetEarthByIdQuery } from '../../store/services/EarthService'
import { VideoPlayer } from '../../components/ToolComponents/VideoPlayer/VideoPlayer'
import './VideoPage.scss'

export const VideoPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);


    const { data  } = useGetEarthByIdQuery(1)

    const [isLayoutDisplayed, setIsLayoutDisplayed] = useState(true);

    const displayLayout = () => setIsLayoutDisplayed(true)
    const hideLayout = () => setIsLayoutDisplayed(false)

    if (!data) return <h1>loading...</h1>


    return (
      <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={isLayoutDisplayed?'default':'hide'} headerDisplayStyle={isLayoutDisplayed?'default':'hide'}>
          <VideoPlayer
                       videoUrl = {'http://localhost:8000/media/videos/Big_Bang_2.mp4'}
                       layoutDisplay={displayLayout}
                       layoutHide={hideLayout}
          />
      </Layout>
    )
}
