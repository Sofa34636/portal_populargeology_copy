import React from 'react'
import { Layout } from '../../../components/Layout/Layout';
imporat Grid from '@mui/material/Grid';
import './EarthMorePage.scss';
import { useAppSelector } from '../../../hooks/redux'

import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import { historyOfEarth } from '../../../types/timeline'
import { CardVerticalList } from '../../../components/CardVerticalList/CardVerticalList'


export const  EarthMorePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { data } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1) // remove for deploy


  return (
    <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'back'} headerDisplayStyle={'default'}>

    </Layout>
  );
};
