import React from 'react';

import { Layout } from '../../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import { useFetchAllExhibits } from "../../../hooks/useFetchAllExhibits";
import {CardCarousel} from "../../../components/CardCarousel/CardCarousel";


export const ExhibitListPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { isLoadingExhibits, fetchedExhibits } = useFetchAllExhibits(6, timeState)

    return (
        <div className='exhibit_list'>
            <Layout layoutProps={{ time: timeState, instrument: instrumentState }}>
                <div className='exhibit_list__content'>
                    {isLoadingExhibits ? <span>Загрузка...</span> :
                        fetchedExhibits.length == 0 ? <span>Нет статей</span> :
                            <CardCarousel cards={fetchedExhibits}/>
                    }
                </div>
            </Layout>
        </div>
    )
}
