import React from 'react'
import { Layout } from '../../../components/Layout/Layout';
import Grid from '@mui/material/Grid';
import { Canvas,   } from '@react-three/fiber';
import {Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './EarthPage.scss';
import { Earth } from '../../../components/ToolComponents/Earth/Earth';
import { useAppSelector } from '../../../hooks/redux'


import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import { pageRedirect } from '../../pageRedirect'
import { historyOfEarth } from '../../../types/timeline'
import Button from '@mui/material/Button'


import { useNavigate } from 'react-router-dom'


export const  EarthPage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);



  const { data, error } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1)
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
                <div className='learn'>
                  <Button className="learn-btn" onClick={learnMoreButtonClick}>Узнать больше</Button>
                </div>
              </div>

            </Grid>
            <Grid className="right" item xs={6}>
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
