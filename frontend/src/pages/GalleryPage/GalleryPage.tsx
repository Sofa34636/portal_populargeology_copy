import * as React from 'react';

import { useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';


export const GalleryPage = () => {
    const location = useLocation()
    const { timeProp } = location.state
    return (
        <div>
            <Layout
                layoutProps={{time: timeProp, instrument: 'ГАЛЛЕРЕЯ'}}
            />
        </div>
    )
}