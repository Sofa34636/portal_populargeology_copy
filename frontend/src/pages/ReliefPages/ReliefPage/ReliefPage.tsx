import React from 'react'
import { Layout } from '../../../components/Layout/Layout'
import { useAppSelector } from '../../../hooks/redux'

export const ReliefPage = () => {

  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);


    return (
      <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
          <span>rElief</span>
      </Layout>
    )
}
