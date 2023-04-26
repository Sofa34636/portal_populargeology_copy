import React, { useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout';
import Grid from '@mui/material/Grid';
import { Canvas } from '@react-three/fiber';
import {Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './ThreeDEarthPage.scss';
import { Earth } from '../../components/ToolComponents/Earth/Earth';
import { useAppSelector} from '../../hooks/redux'
import { Stars } from '@react-three/drei';

import { useGetEarthByIdQuery } from '../../store/services/EarthService'
import { getKeyByValue } from '../pageRedirect'
import { historyOfEarth, timeTypes } from '../../types/timeline'


export const  ThreeDEarthPage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { data, error } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1)

  if (error) {
    return (
      <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterButtonsLeft: true}}>
        <h1>Ошибка при загрузке! (((9</h1>
      </Layout>
    )
  }

  const ProgressCircle = () => {
    return (
      <div className='progress-circle'>
        <CircularProgress size="5rem" color="inherit"/>
      </div>
    )
  }

  return (
        <Layout layoutProps={{ time: timeState, instrument: instrumentState, isFooterButtonsLeft: true}}>
          <Grid className="parent" container spacing={0}>
            <Grid className="left" item xs={6}>
              <h1>{data?.title}</h1>
              <h2>{data?.time_ago}</h2>
              <div className='contents'>
                {
                  data?.text.split('\r\n').map((paragraph, index) => {
                    return (
                      <p key = {index}>
                        {paragraph}
                      </p>
                    )
                  })
                }
              </div>

              {/* <div className='learn'> */}
              {/*  <Button className="learn-btn">Узнать больше</Button> */}
              {/* </div> */}
            </Grid>
            <Grid className="right" item xs={6}>
                <Suspense fallback={<ProgressCircle/>}>
                  <Canvas>
                      <Earth {...data}/>
                  </Canvas>
                </Suspense>
            </Grid>
          </Grid>
        </Layout>
  );
};
