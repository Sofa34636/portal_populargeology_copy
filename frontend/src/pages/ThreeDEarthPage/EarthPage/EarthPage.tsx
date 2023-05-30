import React, { useEffect } from 'react'
import { Layout } from '../../../components/Layout/Layout';
import Grid from '@mui/material/Grid';
import { Canvas,   } from '@react-three/fiber';
import {Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './EarthPage.scss';
import { Earth } from '../../../components/ToolComponents/Earth/Earth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'


import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import { pageRedirect } from '../../pageRedirect'
import { historyOfEarth, instrumentTypes, timeTypes } from '../../../types/timeline'
import Button from '@mui/material/Button'
import { WebGLRenderer } from 'three';

import { useNavigate, useParams } from 'react-router-dom'
import { timeLineSlice } from '../../../store/reducers/timeLineSlice'


export const  EarthPage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);
  const { time: timeParam } = useParams()
  const { changeTime, changeInstrument } = timeLineSlice.actions;
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(changeTime(timeTypes[timeParam]))
    dispatch(changeInstrument(instrumentTypes.earth))
    restoreContext()
  }, [])


  const renderer = new WebGLRenderer({ powerPreference: 'high-performance' });
  const restoreContext = () => {
    const canvas = renderer.domElement;
    canvas.addEventListener(
      'webglcontextlost',
      function (event) {
        event.preventDefault();
        setTimeout(function () {
          renderer.forceContextRestore();
        }, 1);
      },
      false
    );
  }


  const { data, error } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeTypes[timeParam])+1)
  const navigate = useNavigate()


  const ProgressCircle = () => {
    return (
      <div className='progress-circle'>
        <CircularProgress size="5rem" color="inherit"/>
      </div>
    )
  }

  const learnMoreButtonClick = () => {
    navigate(`/${pageRedirect(timeState, instrumentState)}/more`)
  }

  return (
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
          <Grid className="earth-page" container spacing={0}>
            <Grid className="earth-page__left" item xs={6}>
              <h1>{data?.title}</h1>
              <h2>{data?.time_ago}</h2>
              <div className='earth-page__left--contents'>
                {
                  data?.text.split('\r\n').map((paragraph, index) => {
                    return (
                      <p key = {index}>
                        {paragraph}
                      </p>
                    )
                  })
                }
                <div className='learn'>
                  <Button className="learn-btn" onClick={learnMoreButtonClick}>Узнать больше</Button>
                </div>
              </div>

            </Grid>
            <Grid className="earth-page__right" item xs={6}>
              <>
                {
                  error ? <h5 className='error-earth'>Произошла ошибка при загрузке Земли</h5> :

                <Suspense fallback={<ProgressCircle/>}>
                    <Canvas>
                        <Earth {...data}/>
                    </Canvas>
                </Suspense>
                }
              </>
            </Grid>
          </Grid>
        </Layout>
  );
};
