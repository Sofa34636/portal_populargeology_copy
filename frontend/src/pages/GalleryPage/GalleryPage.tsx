import * as React from 'react';

import { useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { useAppSelector } from '../../hooks/redux'


export const GalleryPage = () => {

    const {time, instrument} = useAppSelector((state) => state.timeLineReducer);

    return (
        <div>
            <Layout
              layoutProps={{time: time, instrument: instrument}}
            />
        </div>
    )
}
