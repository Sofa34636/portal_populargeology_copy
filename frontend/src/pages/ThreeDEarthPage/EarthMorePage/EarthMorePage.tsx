import React from 'react'
import { Layout } from '../../../components/Layout/Layout';

import './EarthMorePage.scss';
import { useAppSelector } from '../../../hooks/redux'


export const  EarthMorePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);


  return (
    <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'back'} headerDisplayStyle={'default'} breadCrumbsFirstCrumb={'Узнать больше'}>

    </Layout>
  );
};
