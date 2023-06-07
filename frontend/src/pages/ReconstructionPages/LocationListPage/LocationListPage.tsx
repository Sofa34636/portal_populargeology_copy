import React, {useEffect} from 'react'
import { Layout } from '../../../components/Layout/Layout';
import { CardCarousel } from '../../../components/CardCarousel/CardCarousel';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {useFetchAllLocations} from "../../../hooks/useFetchAllLocations";
import {instrumentTypes, timeTypes} from "../../../types/timeline";
import {useParams} from "react-router-dom";
import {timeLineSlice} from "../../../store/reducers/timeLineSlice";


export const LocationListPage = () => {

    const { time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

    const { time: timeParam } = useParams()
    const { changeTime, changeInstrument } = timeLineSlice.actions;
    const dispatch = useAppDispatch()

    const { isLoadingLocations, fetchedLocations } = useFetchAllLocations(6)

    useEffect(() => {
        dispatch(changeTime(timeTypes[timeParam]))
        dispatch(changeInstrument(instrumentTypes.reconstruction))
    }, [])

    return (
        <Layout time={timeState} instrument={instrumentState} footerDisplayStyle={'default'} headerDisplayStyle={'default'}>
            <div className='location_list__content'>
                {isLoadingLocations ? <span>Загрузка...</span> :
                    fetchedLocations?.length == 0 ? <span>Нет локаций</span> :
                        <CardCarousel cards={fetchedLocations}/>
                }
            </div>
        </Layout>
    );
};
