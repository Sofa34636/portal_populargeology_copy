import React, {useEffect} from 'react'
import { Layout } from '../../../components/Layout/Layout';

import './EarthMorePage.scss';
import { useAppSelector } from '../../../hooks/redux'

import { useGetEarthByIdQuery } from '../../../store/services/EarthService'
import {historyOfEarth} from "../../../types/timeline";

export const  EarthMorePage = () => {
  const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  const { data } = useGetEarthByIdQuery(historyOfEarth.indexOf(timeState)+1)

  return (
    <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'back'} headerDisplayStyle={'default'} breadCrumbsFirstCrumb={'Узнать больше'}>
      <div className="earth-more">
          <img alt='earth-more__image' src={data.image_more}/>
            <h1>{data.title}</h1>
            <div className='earth-more__text'>
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
      </div>
    </Layout>
  );
};