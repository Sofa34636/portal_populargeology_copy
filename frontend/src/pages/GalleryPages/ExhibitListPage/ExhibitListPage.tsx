import React, {useEffect} from 'react';

import { Layout } from '../../../components/Layout/Layout';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import { useFetchAllExhibits } from "../../../hooks/useFetchAllExhibits";
import {CardCarousel} from "../../../components/CardCarousel/CardCarousel";
import {useParams} from "react-router-dom";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";
import {instrumentTypes, timeTypes} from "../../../types/timeline";


export const ExhibitListPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { time: timeParam } = useParams()
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    const { isLoadingExhibits, fetchedExhibits } = useFetchAllExhibits(6, timeState)

    useEffect(() => {
        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.exhibits))
    }, [])

    return (
        <div className='exhibit_list'>
            <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
                <div className='exhibit_list__content'>
                    {isLoadingExhibits ? <span>Загрузка...</span> :
                        fetchedExhibits?.length == 0 ? <span>Нет статей</span> :
                            <CardCarousel cards={fetchedExhibits}/>
                    }
                </div>
            </Layout>
        </div>
    )
}
