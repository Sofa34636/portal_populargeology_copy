import React from 'react'
import { Layout } from '../../../components/Layout/Layout';
import Grid from '@mui/material/Grid';
import './EarthMorePage.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import { historyOfEarth, timeTypes } from '../../../types/timeline'
import Button from '@mui/material/Button'


export const  EarthMorePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const dispatch = useAppDispatch()

  const { data, error } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1) // remove for deploy


  return (
    <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterDisplayed: false}} breadCrumbsFirstCrumb={'Узнать больше'}>
      <Grid className="parent" container spacing={0}>
        <Grid className="left" item xs={6}>
          <h1>тут будет узнать больше {data?.title}</h1>
          {/* <h2>{data?.time_ago}</h2> */}
          {/* <div className='contents'> */}
          {/*   { */}
          {/*     data?.text.split('\r\n').map((paragraph, index) => { */}
          {/*       return ( */}
          {/*         <p key = {index}> */}
          {/*           {paragraph} */}
          {/*         </p> */}
          {/*       ) */}
          {/*     }) */}
          {/*   } */}
          {/* </div> */}

        </Grid>
        <Grid className="right" item xs={6}>
         <h1>damn</h1>
        </Grid>
      </Grid>
    </Layout>
  );
};
